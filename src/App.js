import React, { Component } from "react";
import SearchBar from "./Component/SearchBar";
import { Grid } from "@material-ui/core";
import VideoDetails from "./Component/VideoDetails";
import VideoList from "./Component/VideoList";
import youtube from "./api/youtube";
class App extends Component {
  state = {
    videos: [],
    selectedVideos: null
  };

  onVideoSelect = video => {
    this.setState({
      selectedVideos: video
    });
  };

  componentDidMount() {
    this.handleSubmit("javascript");
  }

  // you can use your key there
  handleSubmit = async searchterm => {
    const respnse = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "",
        q: searchterm
      }
    });

    this.setState({
      videos: respnse.data.items,
      selectedVideos: respnse.data.items[0]
    });
  };

  render() {
    const { selectedVideos, videos } = this.state;

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={7}>
              <VideoDetails video={selectedVideos} />
            </Grid>
            <Grid item xs={5}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
