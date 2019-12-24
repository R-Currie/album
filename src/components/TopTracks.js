import React, { Component } from "react";
import Album from "./Album";

export class TopTracks extends Component {
  componentDidMount() {
    this.props.getTopTracks();
  }

  render() {
    const songs = this.props.songs.map((song, index) => {
      return <Album key={index} album={song} />;
    });

    return (
      <div>
        <h1 className="center ">Top Hits</h1>
        <div className="ui grid">{songs}</div>
      </div>
    );
  }
}

export default TopTracks;
