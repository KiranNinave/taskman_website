import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import UserForm from "../../../components/UserForm";
import { adminAddUserAction } from "../../../actions/admin/userActions";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class UserAddPage extends React.Component {
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
            this.setState({ loading: true });
            await this.props.adminAddUserAction(user);
            this.props.alert.success("user added");
            this.props.history.push("/admin/user");
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };
    render() {
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    Add user
                </Typography>

                <UserForm onSubmit={this.onSubmit} />
            </Paper>
        );
    }
}

export default connect(
    null,
    { adminAddUserAction }
)(withAlert(UserAddPage));
