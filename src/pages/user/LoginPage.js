import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withAlert } from "react-meerkat";
import { userLoginAction } from "../../actions/userActions";
import LoginForm from "../../components/LoginForm";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
            this.props.history.push("/user/home");
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
        if (user && user.role.type === "user") {
            return <Redirect to="/user/home" />;
        }
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    login
                </Typography>
                <LoginForm onSubmit={this.onSubmit} />
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(
    mapStateToProps,
    { userLoginAction }
)(withAlert(LoginPage));
