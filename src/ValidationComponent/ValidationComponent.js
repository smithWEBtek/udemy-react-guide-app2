import React from 'react';

const ValidationComponent = (props) => {
  const textLengthMessage = () => { 
    if(props.textLength < 5){
      return "Text too short"
    }
    if(props.textLength >= 5){
      return "Text long enough"
    }
  }
  
  return (
    <div>
      <p>Validation message length: {props.textLength}</p>
      <p>Validation message: {textLengthMessage()}</p>
    </div>
  )
}


export default ValidationComponent;