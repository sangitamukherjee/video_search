
import React, {useState} from 'react';
import './_categoriesBar.scss';
import { useDispatch } from 'react-redux';
import { getVideosByCategory } from '../../redux/actions/videos.action';



const keywords = [
   'All',
   'Music',
   'Art ',
   'Guitar',
   'Shakira',
   'Katy Perry',
   'Isabelle and Annabelle',
   'Coding',
   'Cricket',
   'Football',
   'Table Tenis',
   'Hudson Career',
   'Kids Channel',
   'Hollywood Movies',
   ]

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All')

  const dispatch = useDispatch()
  const handleClick = (value) =>{
    setActiveElement(value)
    dispatch(getVideosByCategory(value))
  }

  return(
    <div className='categoriesBar'>
         {keywords.map((value, i) => (
            <span
            onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
    )
}
export default CategoriesBar;
