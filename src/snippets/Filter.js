import React from "react";
import { connect } from "react-redux";
import {
    setTextFilter,
    setStartDateFilter,
    setEndDateFilter,
    setStatusFilter
} from "../actions/filterActions";
import { DateRangePicker } from "react-dates";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calenderFocused: null,
            statuses: ["white", "yellow", "green", "red"]
        };
    }

    handleChangeText = e => {
        this.props.setTextFilter(e.target.value);
    };

    handleDateChange = ({ startDate, endDate }) => {
        this.props.setStartDateFilter(startDate);
        this.props.setEndDateFilter(endDate);
    };

    handleDateFocusChange = calenderFocused => {
        this.setState({ calenderFocused });
    };

    render() {
        const { text } = this.props;
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginBottom: 40
                }}
            >
                <TextField
                    type="text"
                    name="text"
                    label="search"
                    placeholder="search"
                    value={text}
                    onChange={this.handleChangeText}
                    margin="normal"
                    style={{
                        marginRight: 30
                    }}
                />
                <div
                    style={{
                        marginRight: 30,
                        marginTop: 10
                    }}
                >
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.handleDateChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.handleDateFocusChange}
                        isOutsideRange={() => false}
                        showClearDates={true}
                        numberOfMonths={1}
                    />
                </div>

                <FormControl style={{ width: 150 }}>
                    <InputLabel htmlFor="status">status</InputLabel>
                    <Select
                        name="status"
                        value={this.props.filters.status}
                        onChange={e => {
                            this.props.setStatusFilter(e.target.value);
                        }}
                        inputProps={{
                            name: "status",
                            id: "status"
                        }}
                    >
                        <MenuItem value="">all</MenuItem>
                        {this.state.statuses.map((status, i) => (
                            <MenuItem key={i.toString()} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.filter.text,
    filters: state.filter
});

export default connect(
    mapStateToProps,
    { setTextFilter, setStartDateFilter, setEndDateFilter, setStatusFilter }
)(Filter);
