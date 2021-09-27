import React, { useEffect, useState } from 'react';
import './_video.scss';
import {AiFillEye} from 'react-icons/ai';
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import { useHistory } from 'react-router-dom'

const Video = ({video}) => {
  const {id, snippet: {
    channelId,
    channelTitle,
    title,
    publishedAt,
    thumbnails: { medium },
  },
} = video

const [views,setViews] = useState(null)
const [duration,setDuration] = useState(null)

const seconds = moment.duration(duration).asSeconds()
const _duration = moment.utc(seconds*1000).format("mm:ss")
const _videoId = id?.videoId || id
const history = useHistory()

useEffect(() => {
  const get_video_details = async()=>{
    const {
      data:{items},
    } = await request('/videos',{
      params:{
        part:'contentDetails,statistics',
        id: _videoId,
      },
    })
    setDuration(items[0].contentDetails.duration)
    setViews(items[0].statistics.viewCount)
  }
  get_video_details()
},[_videoId])



const handleVideoClick  = () => {
  history.push(`/watch/${_videoId}`)
}
  return(
    <div className="video" onClick={handleVideoClick}>
      <div className="video_top">
        <img src={medium.url} alt="" />
        <span>{_duration}</span>
      </div>
      <div className="video_title">
        {title}
      </div>
      <div className="video_detail">
      <span>
        <AiFillEye/> {numeral(views).format("0.a")} Views •
      </span>
      <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video_channel">

        <p>{channelTitle}</p>
      </div>
    </div>
  )
}
export default Video;
