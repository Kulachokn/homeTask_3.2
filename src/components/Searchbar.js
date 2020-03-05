import React, {Component} from "react";

export default class SearchBar extends Component {
    state = {inputValue: ''};

    handleChange = e => {
        this.setState({inputValue: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
            </form>
        );
    }
}