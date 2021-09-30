import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL} from '../actionType';
import request from '../../api';


export const getPopularVideos = () => async dispatch =>{
  try {
      dispatch({
         type: HOME_VIDEOS_REQUEST,
      })
      const {data} = await request('/videos', {
         params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'AU',
            maxResults: 20,
         },
      })
      dispatch({
         type: HOME_VIDEOS_SUCCESS,
         payload: {
            videos: data.items,

         },
      })

   } catch (error) {
     dispatch({
         type: HOME_VIDEOS_FAIL,
         payload: error.message,
      })

   }
}
export const getVideosByCategory = (keyword) => async (dispatch) =>{
  try {
      dispatch({
         type: HOME_VIDEOS_REQUEST,
      })
      const {data} = await request('/search', {
         params: {
            part: 'snippet',
            maxResults: 20,
            q:keyword,
            type:'video',
         },
      })
      dispatch({
         type: HOME_VIDEOS_SUCCESS,
         payload: {
            videos: data.items,

         },
      })

   } catch (error) {
     dispatch({
         type: HOME_VIDEOS_FAIL,
         payload: error.message,
      })
   }
}

export const getVideosBySearch = keyword => async (dispatch) =>{
  try {
      dispatch({
         type: SEARCHED_VIDEO_REQUEST,
      })
      const {data} = await request('/search', {
         params: {
            part: 'snippet',
            maxResults: 20,

            q:keyword,
            type:'video',
         },
      })
      dispatch({
         type: SEARCHED_VIDEO_SUCCESS,
         payload: data.items
       })

   } catch (error) {
     dispatch({
         type: SEARCHED_VIDEO_FAIL,
         payload: error.message,
      })

   }
}
