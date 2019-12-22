import React, { Component } from "react";

export class Searchbar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui clearing segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Artist Search</label>
          <br />
          <input
            type="text"
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
          />
          <button
            className="ui right floated button"
            style={{ marginTop: "20px" }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
