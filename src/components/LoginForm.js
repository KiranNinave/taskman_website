import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        const user = { email, password };
        await this.props.onSubmit(user);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <TextField
                            type="email"
                            name="email"
                            label="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="email"
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
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="password"
                            autoComplete=""
                            required
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <Button variant="contained" type="submit">
                            login
                        </Button>
                    </p>
                </form>
            </div>
        );
    }
}

export default LoginForm;
