import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f3579fa5a3144b929025c350ad684e25'
    }
})