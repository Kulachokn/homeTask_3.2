import React, { Component } from "react";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = { inputValue: "" };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <label>
            <input
              className={styles.SearchFormInput}
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
