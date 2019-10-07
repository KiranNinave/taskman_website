import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { adminGetUserAction } from "../../../actions/admin/userActions";

//ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class UserPage extends React.Component {
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
    async componentDidMount() {
        await this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            this.setState({
                loading: true
            });
            await this.props.adminGetUserAction();
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    render() {
        const { users } = this.props;
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    users
                </Typography>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>email</TableCell>
                            <TableCell align="right">First name</TableCell>
                            <TableCell align="right">Last name</TableCell>
                            <TableCell align="right">team</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => {
                            return (
                                <TableRow key={user._id}>
                                    <TableCell component="th" scope="row">
                                        {user.email}
                                    </TableCell>

                                    <TableCell align="right">
                                        {user.firstName}
                                    </TableCell>
                                    <TableCell align="right">
                                        {user.lastName}
                                    </TableCell>
                                    <TableCell align="right">
                                        {user.team.name}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <p>
                    <Link
                        style={{ color: "#000", textDecoration: "none" }}
                        to="/admin/user/add"
                    >
                        <Button variant="contained">add</Button>
                    </Link>
                </p>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(
    mapStateToProps,
    { adminGetUserAction }
)(withAlert(UserPage));
