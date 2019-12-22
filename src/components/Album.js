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
        <img
          src={
            "https://lastfm.freetls.fastly.net/i/u/64s/de4a95d4be4e554dee43ac399138dc96.png"
          }
          alt={album.name}
        />
      </div>
    );
  }
}

export default Album;
