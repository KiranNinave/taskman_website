import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import { adminAddProjectAction } from "../../../actions/admin/projectActions";
import ProjectForm from "../../../components/ProjectForm";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class ProjectPageAdd extends React.Component {
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
            await this.props.adminAddProjectAction(project);
            this.props.alert.success("project added");
            this.props.history.push("/admin/project");
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
                    Add project
                </Typography>
                <ProjectForm onSubmit={this.onSubmit} />
            </Paper>
        );
    }
}

export default connect(
    null,
    {
        adminAddProjectAction
    }
)(withAlert(ProjectPageAdd));
