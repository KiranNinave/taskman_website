import React from "react";
import { connect } from "react-redux";
import { withAlert } from "react-meerkat";
import { userLoginAction } from "../../actions/userActions";
import LoginForm from "../../components/LoginForm";

class LoginPage extends React.Component {
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
    onSubmit = async user => {
        try {
            await this.props.userLoginAction(user);
            this.props.alert.success("Login successfull");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) {
                this.setState({ loading: false });
            }
        }
    };
    render() {
        return (
            <div>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    { userLoginAction }
)(withAlert(LoginPage));
