import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";
import { adminAddTeamAction } from "../../../actions/admin/teamActions";
import TeamForm from "../../../components/TeamForm";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class TeamPageAdd extends React.Component {
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
    onSubmit = async team => {
        try {
            this.setState({ loading: true });
            await this.props.adminAddTeamAction(team);
            this.props.alert.success("team added");
            this.props.history.push("/admin/team");
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
                    Add team
                </Typography>
                <TeamForm onSubmit={this.onSubmit}></TeamForm>
            </Paper>
        );
    }
}

export default connect(
    null,
    { adminAddTeamAction }
)(withAlert(TeamPageAdd));
