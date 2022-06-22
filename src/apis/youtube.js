import axios from 'axios'

const KEY = 'AIzaSyBVsVSRNYWlFDDLnkzAfN0cJQ9hQE0-rVE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})