import React from "react";
import { Link } from "react-router-dom";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import { adminGetProjectAction } from "../../../actions/admin/projectActions";

// ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class ProjectPage extends React.Component {
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
        await this.fechProjects();
    }

    fechProjects = async () => {
        try {
            this.setState({ loading: true });
            await this.props.adminGetProjectAction();
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMounted) this.setState({ loading: false });
        }
    };

    render() {
        const { projects } = this.props;
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    projects
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
                        {projects.map(project => {
                            const createdAt = new Date(project.createdAt);
                            return (
                                <TableRow key={project._id}>
                                    <TableCell component="th" scope="row">
                                        {project.name}
                                    </TableCell>

                                    <TableCell align="right">
                                        {project.description}
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
                        to={"/admin/project/add"}
                    >
                        <Button variant="contained">add</Button>
                    </Link>
                </p>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    projects: state.project.projects
});
export default connect(
    mapStateToProps,
    { adminGetProjectAction }
)(withAlert(ProjectPage));
