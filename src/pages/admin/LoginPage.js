import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import { adminLoginAction } from "../../actions/admin/adminActions";

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
        this.setState({ loading: true });
        try {
            await this.props.adminLoginAction(user);
            this.props.alert.success("Login successfull");
            this.props.history.push("/admin/home");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) {
                this.setState({ loading: false });
            }
        }
    };
    render() {
        const { user } = this.props;
        if (user && user.role.type === "admin") {
            return <Redirect to="/admin/home" />;
        }
        return (
            <div>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    { adminLoginAction }
)(withAlert(LoginPage));
