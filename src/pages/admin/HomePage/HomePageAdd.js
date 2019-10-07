import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import { adminAddWorkspaceAction } from "../../../actions/admin/workspaceAction";
import WorkspaceForm from "../../../components/WorkspaceForm";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class HomePageAdd extends React.Component {
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
    onSubmit = async workspace => {
        try {
            await this.props.adminAddWorkspaceAction(workspace);
            this.props.alert.success("workspace added");
            this.props.history.push("/admin/home");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };
    render() {
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    Add workspce
                </Typography>
                <WorkspaceForm onSubmit={this.onSubmit} />
            </Paper>
        );
    }
}

export default connect(
    null,
    { adminAddWorkspaceAction }
)(withAlert(HomePageAdd));
