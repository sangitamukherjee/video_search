import React from 'react';
import './_loginScreen.scss';

const LoginScreen = () =>{
  return(
    <div className='login'>
         <div className='login__container'>
            <h2>Video Search</h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button>Login Here</button>
            <p>This Project is made using YOUTUBE DATA API</p>
         </div>
      </div>
  )
}
export default LoginScreen;
