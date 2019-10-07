import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TeamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = async e => {
        e.preventDefault();
        const { name } = this.state;
        const team = { name };
        await this.props.onSubmit(team);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <Button variant="contained" type="submit">
                            add
                        </Button>
                    </p>
                </form>
            </div>
        );
    }
}

export default TeamForm;
