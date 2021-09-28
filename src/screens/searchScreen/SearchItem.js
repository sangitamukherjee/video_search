import React, { useState } from 'react'


import { AiFillEye } from 'react-icons/ai'


import moment from 'moment'
import numeral from 'numeral'


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

   const [views, setViews] = useState(null)
   const [duration, setDuration] = useState(null)


   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')

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
    <span className='video__top__duration'>{_duration}</span>
    </div>
    <div className='video_title'>
    {title}
    </div>
    <div className='video__details'>
         <span>
            <AiFillEye /> {numeral(views).format('0.a')} Views •{' '}
         </span>{' '}
         <span> {moment(publishedAt).fromNow()} </span>
        </div>
         </div>

   )
}

export default SearchItem;
