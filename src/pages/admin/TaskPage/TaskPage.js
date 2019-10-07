import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import { adminGetTaskAction } from "../../../actions/admin/taskActions";

//ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// filter
import Filter from "../../../snippets/Filter";
import taskSelector from "../../../selectors/taskSelector";

class TaskPage extends React.Component {
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

    async componentDidMount() {
        await this.fetchTasks();
    }

    fetchTasks = async () => {
        try {
            this.setState({ loading: true });
            await this.props.adminGetTaskAction();
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    render() {
        const { tasks } = this.props;
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    tasks
                </Typography>
                <Filter />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">user</TableCell>
                            <TableCell align="right">date</TableCell>
                            <TableCell align="right">status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map(task => {
                            const startDate = moment
                                .unix(task.startDate)
                                .format("MM/DD/YYYY");
                            const endDate = moment
                                .unix(task.endDate)
                                .format("MM/DD/YYYY");
                            const user = task.user.firstName;
                            return (
                                <TableRow key={task._id}>
                                    <TableCell component="th" scope="row">
                                        {task.name}
                                    </TableCell>

                                    <TableCell align="right">{user}</TableCell>
                                    <TableCell align="right">
                                        {startDate} - {endDate}
                                    </TableCell>
                                    <TableCell align="right">
                                        {task.status}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <p>
                    <Link
                        style={{ color: "#000", textDecoration: "none" }}
                        to="/admin/task/add"
                    >
                        <Button variant="contained">add</Button>
                    </Link>
                </p>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    tasks: taskSelector(state.task.tasks, state.filter)
});

export default connect(
    mapStateToProps,
    { adminGetTaskAction }
)(withAlert(TaskPage));
