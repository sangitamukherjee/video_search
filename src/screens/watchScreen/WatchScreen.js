import React from 'react';

import { useParams } from 'react-router-dom';

const WatchScreen = () => {
  const {id} = useParams()
  return(
    <div className='watchScreen__player'>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
          frameBorder='0'
          title='My Video'
          allowFullScreen
          width='100%'
          height='100%'></iframe>
    </div>
  )
}
export default WatchScreen;
