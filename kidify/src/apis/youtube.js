import axios from "axios";

const KEY = 'AIzaSyBxTST7wDM4SgGqp0Pvpw22Bc8p881eJy0';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 25,
    key: KEY
  }
});