import React from 'react';
import './_sidebar.scss';
import { Link } from 'react-router-dom'


import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied,
} from 'react-icons/md'

const Sidebar = ({sidebar, handleToggleSidebar}) => {
  return(
    <nav className={sidebar? 'sidebar open' : 'sidebar'}>
      <Link to='/'>
      <li>
        <MdHome size={23}/>
          <span>Home</span>
      </li>
      </Link>

      <li>
        <MdSubscriptions size={23}/>
          <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
          <span>Liked</span>
      </li>
      <li>
        <MdHistory size={23}/>
          <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23}/>
          <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
          <span>I don't know</span>
      </li>
      <hr/>
      <li>
        <MdExitToApp size={23}/>
          <span>Exit</span>
      </li>
      <hr/>
    </nav>
  )
}
export default Sidebar;
