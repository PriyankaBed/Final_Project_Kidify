import VideoItem from "./VideoItem";

function Homepage({ data, user }) {
  return (
    <div className="homepage">
      <div className="container">
        <div className="video-cards">
          {data.map((dataItem, index) => {
            return (
              <div className="card-container" key={index}>
                <VideoItem video={dataItem} user={user}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
