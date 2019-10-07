import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withAlert } from "react-meerkat";
import { adminGetTeamAction } from "../../../actions/admin/teamActions";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class TeamPage extends React.Component {
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
        await this.fetchTeams();
    }

    fetchTeams = async () => {
        try {
            this.setState({ loading: true });
            await this.props.adminGetTeamAction();
        } catch (err) {
            this.props.alert.error(err.message);
        } finally {
            if (this.isComponentMouted) this.setState({ loading: false });
        }
    };
    render() {
        const { teams } = this.props;
        return (
            <Paper style={{ padding: 20 }}>
                <Typography variant="h5" component="h3">
                    teams
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
                        {teams.map(team => {
                            const createdAt = new Date(team.createdAt);
                            return (
                                <TableRow key={team._id}>
                                    <TableCell component="th" scope="row">
                                        {team.name}
                                    </TableCell>

                                    <TableCell align="right">
                                        {team.description}
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
                        to="/admin/team/add"
                    >
                        <Button variant="contained">add</Button>
                    </Link>
                </p>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    teams: state.team.teams
});
export default connect(
    mapStateToProps,
    { adminGetTeamAction }
)(withAlert(TeamPage));
