import React from "react";
import { connect } from "react-redux";

class ProjectPageView extends React.Component {
    render() {
        return (
            <div>
                <h3>view project</h3>
            </div>
        );
    }
}

export default connect()(ProjectPageView);
