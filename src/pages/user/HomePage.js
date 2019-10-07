import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withAlert } from "react-meerkat";
import {
    userGetTaskAction,
    userPatchStatus,
    userChangeTaskStatus
} from "../../actions/user/taskActions";

// selector
import taskSelector from "../../selectors/taskSelector";

//ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

// snippets
import Filter from "../../snippets/Filter";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            status: "",
            statusValues: ["white", "yellow", "green", "red"]
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
        console.log("fetch tast");
        try {
            this.setState({ loading: true });
            await this.props.userGetTaskAction();
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    onClick = async (id, status) => {
        try {
            this.setState({ loading: true });
            await this.props.userPatchStatus(id, { status });
            this.props.alert.success("task updated");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
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
                            <TableCell>task name</TableCell>
                            <TableCell align="right">project name</TableCell>
                            <TableCell align="right">date</TableCell>
                            <TableCell align="right">status</TableCell>
                            <TableCell align="right">action</TableCell>
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
                            const project = task.project.name;

                            return (
                                <TableRow key={task._id}>
                                    <TableCell component="th" scope="row">
                                        {task.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {project}
                                    </TableCell>

                                    <TableCell align="right">
                                        {startDate} - {endDate}
                                    </TableCell>
                                    <TableCell align="right">
                                        <FormControl style={{ width: 150 }}>
                                            <InputLabel htmlFor="status">
                                                {task.status === "white" &&
                                                    "new"}
                                                {task.status === "yellow" &&
                                                    "running"}
                                                {task.status === "green" &&
                                                    "complited"}
                                                {task.status === "red" &&
                                                    "exceded"}
                                            </InputLabel>
                                            <Select
                                                name="status"
                                                value={task.status}
                                                labelWidth={100}
                                                onChange={e => {
                                                    this.props.userChangeTaskStatus(
                                                        task._id,
                                                        e.target.value
                                                    );
                                                }}
                                                inputProps={{
                                                    name: "status",
                                                    id: "status"
                                                }}
                                            >
                                                {this.state.statusValues.map(
                                                    (status, index) => (
                                                        <MenuItem
                                                            key={index.toString()}
                                                            value={status}
                                                        >
                                                            {status}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            type="button"
                                            onClick={() =>
                                                this.onClick(
                                                    task._id,
                                                    task.status
                                                )
                                            }
                                        >
                                            mark
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapSateToProps = state => ({
    tasks: taskSelector(state.task.tasks, state.filter)
});
export default connect(
    mapSateToProps,
    { userGetTaskAction, userPatchStatus, userChangeTaskStatus }
)(withAlert(HomePage));
