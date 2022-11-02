import VideoItem from "../VideoItem";

function Page03({ data }) {
    return (
        <div className='agespage'>
            <div className='container'>
                <h1 style={{ fontFamily: "cursive", padding: "30px" }}>Ages 0-3</h1>
                <div className='video-cards'>
                    {data
                        .filter((item) => item.category === "0-3")
                        .map((item) => {
                            return (
                                <div className='card-container-03 card-container'>
                                    <div>
                                        <VideoItem video={item} />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Page03;
