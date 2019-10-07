import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import TaskForm from "../../../components/TaskForm";
import { adminAddTaskAction } from "../../../actions/admin/taskActions";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class TaskPageAdd extends React.Component {
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

    onSubmit = async task => {
        task.startDate = task.startDate.unix();
        task.endDate = task.endDate.unix();
        try {
            this.setState({ loading: false });
            await this.props.adminAddTaskAction(task);
            this.props.alert.success("task added");
            this.props.history.push("/admin/task");
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
                    Add task
                </Typography>
                <TaskForm onSubmit={this.onSubmit} />
            </Paper>
        );
    }
}

export default connect(
    null,
    { adminAddTaskAction }
)(withAlert(TaskPageAdd));
