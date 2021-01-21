import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID hhW-GPs6stU7FdhgQ3HcEvkoFP-En9E0tD81khak5Ig",
  },
});
