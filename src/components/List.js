import React from "react";
import Album from "./Album";

const List = props => {
  const albums = props.albums.map((album, index) => {
    return <Album key={index} album={album} />;
  });

  return <div className="ui grid">{albums}</div>;
};

export default List;
