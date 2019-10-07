import React from "react";
import { withAlert } from "react-meerkat";
import { connect } from "react-redux";

class TeamPageEdit extends React.Component {
    render() {
        return (
            <div>
                <h3>edit team</h3>
            </div>
        );
    }
}

export default connect()(withAlert(TeamPageEdit));
