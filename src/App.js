import React from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Searchbar from "./components/Searchbar";
import NewReleases from "./components/NewReleases";

class App extends React.Component {
  state = {
    albums: [],
    search: false,
    newReleases: []
  };

  // todo: Add options to search for artist, song title, album, etc and pass that through state

  getNewReleases = async () => {
    const res = await axios.get(
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b51e79f64b0918bfabb85f9627eabbd5&format=json"
    );

    console.log(res.data.tracks.track);
    this.setState({ newReleases: res.data.tracks.track });
  };

  onSearchSubmit = async term => {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${term}&api_key=b51e79f64b0918bfabb85f9627eabbd5&format=json`
    );

    this.setState({
      albums: res.data.topalbums.album,
      loading: false,
      search: true
    });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        {this.state.search ? (
          <List albums={this.state.albums} />
        ) : (
          <NewReleases
            getNewReleases={this.getNewReleases}
            songs={this.state.newReleases}
          />
        )}
      </div>
    );
  }
}

export default App;
