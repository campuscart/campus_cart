import React from 'react';
import { RiDoubleQuotesR} from "react-icons/ri";
import { FaStar } from 'react-icons/fa';
import "./box.css";
function Box({text,name,year}) {
  return (
    <div className='box_cont'>
      <div className='desc_cont'>
              <div className='icon'><RiDoubleQuotesR color="white" opacity="0.6" fontSize="7rem" /></div>
              <div className='desc'>
                  <p>{text}</p>
              </div>
              <div className='stars'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
        </div>
        <div className='info_cont'>
            <div className='name'>{name}</div>
            <div className='year'>{year}</div>
        </div>
    </div>
  )
}
export default Box;

