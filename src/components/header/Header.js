import React, { useState } from 'react';
import './_header.scss';


import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogInCircle } from "react-icons/bi";
import { MdNotifications, MdApps } from 'react-icons/md'

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
      src="https://images-platform.99static.com/TnAXZVaI2N-HCMYBcODs6w4wmdQ=/500x500/top/smart/99designs-contests-attachments/56/56125/attachment_56125388"
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

  <div className='header__icons'>
    <MdNotifications size={28} />
    <MdApps size={28} />
    <button type="submit">
    <BiLogInCircle size={22}/>
    </button>
  </div>




</div>
  )
}
export default Header;
