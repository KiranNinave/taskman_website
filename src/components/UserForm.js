import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            team: ""
        };
    }
    onSubmit = async e => {
        e.preventDefault();
        const { firstName, lastName, email, password, team } = this.state;
        const user = { firstName, lastName, email, password, team };
        await this.props.onSubmit(user);
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        const { teams } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <TextField
                            type="text"
                            name="firstName"
                            label="firstName"
                            placeholder="first name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            required
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <TextField
                            type="text"
                            name="lastName"
                            label="lastName"
                            placeholder="last name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            required
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <TextField
                            type="email"
                            name="email"
                            label="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <TextField
                            type="password"
                            name="password"
                            label="password"
                            minLength={8}
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            autoComplete=""
                            required
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <FormControl variant="outlined" style={{ width: 150 }}>
                            <InputLabel htmlFor="team">team</InputLabel>
                            <Select
                                name="team"
                                value={this.state.team}
                                onChange={this.handleChange}
                                required
                                labelWidth={100}
                                inputProps={{
                                    name: "team",
                                    id: "team"
                                }}
                            >
                                <MenuItem value="">select</MenuItem>
                                {teams.map(team => (
                                    <MenuItem key={team._id} value={team._id}>
                                        {team.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </p>
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
    teams: state.team.teams
});

export default connect(mapStateToProps)(UserForm);
