import React, { Component } from "react";

export class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.album.image[1]);
  }

  render() {
    const { album } = this.props;

    return (
      <div>
        <h1>{album.name}</h1>
        <img src={album.image[2]["#text"]} alt={album.name} />
      </div>
    );
  }
}

export default Album;
