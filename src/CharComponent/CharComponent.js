import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
   const chars = props.text.split('').map((c, index) => 
    <span 
      className="char"
      key="index"
      onClick={(event)=>props.remove(index)}
      >{c} </span>
    )
 
  return(
    <div>
      {chars}
    </div>
  )
}

export default CharComponent;