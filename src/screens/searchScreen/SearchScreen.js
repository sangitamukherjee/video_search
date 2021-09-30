import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector  } from 'react-redux';
import { getVideosBySearch } from '../../redux/actions/videos.action';
import SearchItem from './SearchItem';


const SearchScreen = () => {
  const {query} = useParams()

  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getVideosBySearch(query))
  },[query, dispatch])

  const{videos, loading} = useSelector(state => state.searchedVideos)
  return(
    <Container>
      {
      !loading ? (
        videos?.map(video => (
          <SearchItem video = {video} key={video.id.videoId} SearchScreen/>
        ))
      ):<h1>loading....</h1>
      }

    </Container>
  )
}
export default SearchScreen;
