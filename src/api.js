import axios from 'axios';

const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I',
   },
})

export default request;
