import React from "react";
import { connect } from "react-redux";

class TeamPageView extends React.Component {
    render() {
        return (
            <div>
                <h3>view Team</h3>
            </div>
        );
    }
}

export default connect()(TeamPageView);
