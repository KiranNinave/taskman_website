import React from "react";
import { connect } from "react-redux";
class HomePageView extends React.Component {
    render() {
        const { workspace } = this.props;
        if (!workspace) return <h1>loading...</h1>;
        return (
            <div>
                <h1>{workspace.name}</h1>
                <h3>{workspace.description}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    workspace: state.workspace.workspaces.find(
        workspace => workspace._id === props.match.params.id
    )
});

export default connect(
    mapStateToProps,
    null
)(HomePageView);
