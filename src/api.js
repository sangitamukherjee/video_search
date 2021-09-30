import axios from 'axios';

const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyDb44i7VnS4YXWoEpgBL7FYg2uI63kkD0w',
   },
})

export default request;
