import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { adminGetProjectUsers } from "../actions/admin/projectActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            project: "",
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month"),
            user: "",
            calenderFocused: null,
            loading: false
        };
        this.isComponentMounted = true;
    }
    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    fetchUsers = async id => {
        try {
            this.setState({ loading: true });
            await this.props.adminGetProjectUsers(id);
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    onSubmit = async e => {
        e.preventDefault();
        const {
            name,
            description,
            project,
            startDate,
            endDate,
            user
        } = this.state;
        const task = { name, description, project, startDate, endDate, user };
        await this.props.onSubmit(task);
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.name === "project" && e.target.value)
            this.fetchUsers(e.target.value);
    };

    handleDateChange = ({ startDate, endDate }) => {
        this.setState({ startDate, endDate });
    };

    handleDateFocusChange = calenderFocused => {
        this.setState({ calenderFocused });
    };

    render() {
        const { projects, users } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <TextField
                            type="text"
                            name="name"
                            label="Name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <TextField
                            name="description"
                            label="Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="description"
                            margin="normal"
                            variant="outlined"
                        ></TextField>
                    </p>
                    <p>
                        <FormControl variant="outlined" style={{ width: 150 }}>
                            <InputLabel htmlFor="project">project</InputLabel>
                            <Select
                                value={this.state.project}
                                onChange={this.handleChange}
                                name="project"
                                required
                                labelWidth={100}
                                inputProps={{
                                    name: "project",
                                    id: "project"
                                }}
                            >
                                <MenuItem value="">select</MenuItem>
                                {projects.map(project => (
                                    <MenuItem
                                        key={project._id}
                                        value={project._id}
                                    >
                                        {project.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </p>

                    <p>
                        <FormControl variant="outlined" style={{ width: 150 }}>
                            <InputLabel htmlFor="user">user</InputLabel>
                            <Select
                                name="user"
                                value={this.state.user}
                                onChange={this.handleChange}
                                required
                                labelWidth={100}
                                inputProps={{
                                    name: "user",
                                    id: "user"
                                }}
                            >
                                <MenuItem value="">select</MenuItem>

                                {users.map(user => (
                                    <MenuItem key={user._id} value={user._id}>
                                        {user.firstName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </p>

                    <DateRangePicker
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={this.handleDateChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.handleDateFocusChange}
                        isOutsideRange={() => false}
                        showClearDates={true}
                        numberOfMonths={1}
                    />

                    <p>
                        <Button variant="contained" type="submit">
                            add
                        </Button>
                    </p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    projects: state.project.projects,
    users: state.project.users
});
export default connect(
    mapStateToProps,
    { adminGetProjectUsers }
)(withAlert(TaskForm));
