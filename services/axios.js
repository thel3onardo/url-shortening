//this file contains all axios call methods
import axios from 'axios';

const get = async (url) => {
    return axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
}
const API = {
    get
};

export default API;