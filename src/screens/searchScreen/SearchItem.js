import React from 'react'

import moment from 'moment'

import { useHistory } from 'react-router-dom'

const SearchItem = ({ video, searchScreen, subScreen }) => {
   const {
      id,
      snippet: {
         channelId,
         title,
         publishedAt,
         thumbnails: { medium },
         resourceId,
      },
   } = video

   const isVideo = !(id.kind === 'youtube#channel' || subScreen)






   const history = useHistory()

   const _channelId = resourceId?.channelId || channelId

   const handleClick = () => {
      isVideo
         ? history.push(`/watch/${id.videoId}`)
         : history.push(`/channel/${_channelId}`)
   }

   return (
    <div className='SearchItem align-items-center'
      onClick={handleClick}>
    <div className = 'video_top'>
      <img src= {medium.url} alt=''/>

    </div>
    <div className='video_title'>
      {title}
    </div>
    <div className='video__details'>

        <span> {moment(publishedAt).fromNow()} </span>
    </div>
  </div>

)
}
export default SearchItem;
