import VideoItem from "./VideoItem";

function Homepage({ data }) {
  return (
    <div className="homepage">
      <div className="container">
        <div className="video-cards">
          {data.map((dataItem, index) => {
            return (
              <div className="card-container" key={index}>
                <VideoItem video={dataItem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
