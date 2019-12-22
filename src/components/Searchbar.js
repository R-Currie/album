import React, { Component } from "react";

export class Searchbar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Artist Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
