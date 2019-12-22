import React from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Searchbar from "./components/Searchbar";

class App extends React.Component {
  state = {
    albums: []
  };

  // todo: Add options to search for artist, song title, album, etc and pass that through state

  onSearchSubmit = async term => {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${term}&api_key=b51e79f64b0918bfabb85f9627eabbd5&format=json`
    );

    console.log(term);
    this.setState({ albums: res.data.topalbums.album, loading: false });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <List albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
