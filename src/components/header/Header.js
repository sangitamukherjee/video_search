import React, { useState } from 'react';
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogInCircle } from "react-icons/bi";

import { useHistory } from 'react-router-dom';

const Header = ({handleToggleSidebar}) => {
  const [input, setInput] = useState('')
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`search/${input}`)
  }


  return(
    <div className="header">
      <FaBars className="header__menu" size={26}
      onClick={() => handleToggleSidebar()}
    />
    <img
      src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
      alt=''
      className="header__logo"
      />
  <form onSubmit = {handleSubmit}>
    <input
      type="text"
      placeholder="Search"
      value={input}
      onChange={e => setInput(e.target.value)}
    />
    <button type="submit">
      <AiOutlineSearch size={22}/>
    </button>
  </form>
  <button type="submit">
    <BiLogInCircle size={22}/>
  </button>

</div>
  )
}
export default Header;
