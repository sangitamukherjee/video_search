import React from 'react'

import moment from 'moment'

import { useHistory } from 'react-router-dom'

const SearchItem = ({ video, searchScreen}) => {
   const {
      id,
      snippet: {
         title,
         publishedAt,
         thumbnails: { medium },
      },
   } = video

   const history = useHistory()
   const handleClick = () => {
          history.push(`/watch/${id.videoId}`)
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
