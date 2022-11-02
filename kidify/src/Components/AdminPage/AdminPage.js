import React from "react";
import youtube from "../../apis/youtube";
import SearchBar from "./Search/SearchBar";
import VideoList from "./Search/VideoList";
import VideoDetail from "./Search/VideoDetail";

class AdminPage extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onSearchSubmit = async term => {
    const { data: { items: videos } } = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos, selectedVideo: videos[0] })
  }

  onSelectVideo = selectedVideo => {
    this.setState({ selectedVideo });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column" >
              {selectedVideo && <VideoDetail video={selectedVideo} />}
            </div>
            <div className="five wide column" >
              <VideoList videos={videos} onVideoSelect={this.onSelectVideo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default AdminPage;
