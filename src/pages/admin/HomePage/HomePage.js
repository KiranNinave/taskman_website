import React from "react";
import { withAlert } from "react-meerkat";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { adminGetWorkspaceAction } from "../../../actions/admin/workspaceAction";

//ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.isComponentMouted = true;
    }
    componentWillUnmount() {
        this.isComponentMouted = false;
    }
    async componentDidMount() {
        await this.fetchWorkspace();
    }

    fetchWorkspace = async () => {
        try {
            this.setState({ loading: true });
            await this.props.adminGetWorkspaceAction();
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMouted) {
                this.setState({ loading: false });
            }
        }
    };

    render() {
        const { workspaces } = this.props;
        // const classes = useStyles();
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    workspaces
                </Typography>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">desciption</TableCell>
                            <TableCell align="right">created at</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workspaces.map(workspace => {
                            const createdAt = new Date(workspace.createdAt);
                            return (
                                <TableRow key={workspace._id}>
                                    <TableCell component="th" scope="row">
                                        {workspace.name}
                                    </TableCell>

                                    <TableCell align="right">
                                        {workspace.description}
                                    </TableCell>
                                    <TableCell align="right">
                                        {createdAt.toLocaleDateString()}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <p>
                    <Link
                        style={{ color: "#000", textDecoration: "none" }}
                        to="/admin/home/add"
                    >
                        <Button variant="contained">add</Button>
                    </Link>
                </p>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    workspaces: state.workspace.workspaces
});

export default connect(
    mapStateToProps,
    { adminGetWorkspaceAction }
)(withAlert(HomePage));
