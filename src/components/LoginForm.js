import React from "react";

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
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="email"
                            // required
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="password"
                            autoComplete=""
                            required
                        />
                    </p>
                    <p>
                        <button type="submit">login</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default LoginForm;
