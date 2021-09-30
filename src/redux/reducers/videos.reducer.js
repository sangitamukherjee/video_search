import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL} from '../actionType';

export const homeVideosReducer = (state ={
  videos:[],
  loading:false,
},action
) => {
const {type, payload} = action

switch(type){
  case HOME_VIDEOS_SUCCESS:
    return {
    ...state,
    videos:payload.videos,
    loading:false,
  }
  case HOME_VIDEOS_FAIL:
    return {
    ...state,
    loading:false,
    error:payload
  }
  case HOME_VIDEOS_REQUEST:
    return {
    ...state,
    loading:true,
  }
  default:return state
}
}
export const searchedVideosReducer = (
  state ={
  loading:true,
  videos:[],
},
action
) => {
const {type, payload} = action

switch(type){
  case SEARCHED_VIDEO_REQUEST:
    return {
    ...state,
    loading:true,
    }
  case SEARCHED_VIDEO_SUCCESS:
    return {
    ...state,
    videos:payload,
    loading:false,
  }
  case SEARCHED_VIDEO_FAIL:
    return {
    ...state,
    loading:false,
    error:payload,
  }
  default:return state
}
}
