import React from "react";
import { connect } from "react-redux";
import { userLoginAction } from "../actions/userActions";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: "",
            password: ""
        };
        this.isComponentMounted = true;
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        const { email, password } = this.state;
        const user = { email, password };
        try {
            await this.props.userLoginAction(user);
        } catch (err) {
            console.log(err);
        } finally {
            if (this.isComponentMounted) {
                this.setState({ loading: false });
            }
        }
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
                            required
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

export default connect(
    null,
    { userLoginAction }
)(LoginForm);
