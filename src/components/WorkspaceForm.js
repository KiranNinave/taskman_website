import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class WorkspaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.workspace ? props.workspace.name : "",
            description: props.workspace ? props.workspace.description : ""
        };
    }

    onDelete = async () => {
        await this.props.onDelete();
    };

    onSubmit = async e => {
        e.preventDefault();
        const { name, description } = this.state;
        const workspace = { name, description };
        await this.props.onSubmit(workspace);
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </p>

                    <p>
                        <TextField
                            id="outlined-name"
                            label="Description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            multiline
                            rowsMax="4"
                        />
                    </p>
                    <p>
                        <Button variant="contained" type="submit">
                            {this.props.workspace ? "update" : "add"}
                        </Button>
                    </p>

                    {this.props.workspace && (
                        <button type="button" onClick={this.onDelete}>
                            delete
                        </button>
                    )}
                </form>
            </div>
        );
    }
}

export default WorkspaceForm;
