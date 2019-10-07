import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import {
    adminUpdateProjectAction,
    adminDeleteProjectAction
} from "../../../actions/admin/projectActions";
import ProjectForm from "../../../components/ProjectForm";

class ProjectPageEdit extends React.Component {
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

    onSubmit = async project => {
        try {
            this.setState({ loading: true });
            const projectId = this.props.match.params.id;
            await this.props.adminUpdateProjectAction(projectId, project);
            this.props.alert.success("project updated");
            this.props.history.push("/admin/project");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    onDelete = async () => {
        try {
            this.setState({ loading: true });
            const projectId = this.props.match.params.id;
            await this.props.adminDeleteProjectAction(projectId);
            this.props.alert.success("project deleted");
            this.props.history.push("/admin/project");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    fetchProduct = async () => {};
    render() {
        const { project } = this.props;
        return (
            <div>
                <h3>edit project</h3>
                {project && (
                    <ProjectForm
                        project={project}
                        onSubmit={this.onSubmit}
                        onDelete={this.onDelete}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    project: state.project.projects.find(
        project => project._id === props.match.params.id
    )
});

export default connect(
    mapStateToProps,
    { adminUpdateProjectAction, adminDeleteProjectAction }
)(withAlert(ProjectPageEdit));
