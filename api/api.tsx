import axios from "axios";

export default axios.create({
    baseURL: "https://rs-blackmarket-api.herokuapp.com/api/v1"
});
