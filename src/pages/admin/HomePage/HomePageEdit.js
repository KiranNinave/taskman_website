import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import WorkspaceForm from "../../../components/WorkspaceForm";
import {
    adminUpdateWorkspaceAction,
    adminDeleteWorkspaceAction
} from "../../../actions/admin/workspaceAction";

class HomePageEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.isComponentMounted = true;
    }
    componentWillUnmount() {
        this.isComponentMounted = false;
    }
    onDelete = async () => {
        try {
            this.setState({ loading: true });
            const workspaceId = this.props.match.params.id;
            await this.props.adminDeleteWorkspaceAction(workspaceId);
            this.props.alert.success("workspace deleted");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };
    onSubmit = async workspace => {
        try {
            this.setState({ loading: true });
            const workspaceId = this.props.match.params.id;
            await this.props.adminUpdateWorkspaceAction(workspaceId, workspace);
            this.props.alert.success("workspace updated");
            this.props.history.push("/admin/home");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };
    render() {
        const { workspace } = this.props;
        return (
            <div>
                <h3>edit workspace</h3>
                {workspace && (
                    <WorkspaceForm
                        onSubmit={this.onSubmit}
                        workspace={workspace}
                        onDelete={this.onDelete}
                    />
                )}
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
    workspace: state.workspace.workspaces.find(
        workspace => workspace._id === props.match.params.id
    )
});
export default connect(
    mapStateToProps,
    { adminUpdateWorkspaceAction, adminDeleteWorkspaceAction }
)(withAlert(HomePageEdit));
