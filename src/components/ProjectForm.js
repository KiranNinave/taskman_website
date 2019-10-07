import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.project ? props.project.name : "",
            description: props.project ? props.project.description : "",
            workspace: props.project ? props.project.workspace._id : "",
            method: "",
            worker: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = async e => {
        e.preventDefault();
        const { name, description, workspace, method, worker } = this.state;
        const project = { name, description, workspace, method, worker };
        await this.props.onSubmit(project);
    };

    onDelete = async () => {
        await this.props.onDelete();
    };

    render() {
        const { workspaces, users, teams } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            required
                        />
                    </p>
                    <p>
                        <TextField
                            id="outlined-name"
                            label="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <FormControl variant="outlined" style={{ width: 150 }}>
                            <InputLabel htmlFor="workspace">
                                workspace
                            </InputLabel>
                            <Select
                                name="workspace"
                                required
                                value={this.state.workspace}
                                labelWidth={100}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "workspace",
                                    id: "workspace"
                                }}
                            >
                                <MenuItem value="">select</MenuItem>

                                {workspaces.map(workspace => (
                                    <MenuItem
                                        key={workspace._id}
                                        value={workspace._id}
                                    >
                                        {workspace.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </p>
                    <p>
                        <FormControl variant="outlined" style={{ width: 150 }}>
                            <InputLabel htmlFor="method">method</InputLabel>
                            <Select
                                name="method"
                                value={this.state.method}
                                onChange={this.handleChange}
                                required
                                labelWidth={100}
                                inputProps={{
                                    name: "method",
                                    id: "method"
                                }}
                            >
                                <MenuItem value="">select</MenuItem>
                                <MenuItem value="user">user</MenuItem>
                                <MenuItem value="team">team</MenuItem>
                            </Select>
                        </FormControl>
                    </p>
                    <p>
                        <FormControl variant="outlined" style={{ width: 150 }}>
                            <InputLabel htmlFor="worker">worker</InputLabel>
                            <Select
                                name="worker"
                                value={this.state.worker}
                                onChange={this.handleChange}
                                required
                                labelWidth={100}
                                inputProps={{
                                    name: "worker",
                                    id: "worker"
                                }}
                            >
                                <MenuItem value="">select</MenuItem>
                                {this.state.method === "user" &&
                                    users.map(user => (
                                        <MenuItem
                                            key={user._id}
                                            value={user._id}
                                        >
                                            {user.firstName}
                                        </MenuItem>
                                    ))}
                                {this.state.method === "team" &&
                                    teams.map(team => (
                                        <MenuItem
                                            key={team._id}
                                            value={team._id}
                                        >
                                            {team.name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </p>
                    <p>
                        <Button variant="contained" type="submit">
                            {" "}
                            {this.props.project ? "update" : "add"}
                        </Button>
                    </p>

                    {this.props.project && (
                        <button type="button" onClick={this.onDelete}>
                            delete
                        </button>
                    )}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    workspaces: state.workspace.workspaces,
    users: state.user.users,
    teams: state.team.teams
});

export default connect(
    mapStateToProps,
    null
)(ProjectForm);
