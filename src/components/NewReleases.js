import React, { Component } from "react";
import Album from "./Album";

export class NewReleases extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNewReleases();
  }

  render() {
    const songs = this.props.songs.map((song, index) => {
      return <Album key={index} album={song} />;
    });

    return <div>{songs}</div>;
  }
}

export default NewReleases;
