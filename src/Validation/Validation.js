import React from 'react';

const validation = (props) => {
    let validationMessage = "Text long enough";

    if(props.inputLength <= 5){
      validationMessage = "Text too short";
    }
  
  return (
    <div>
      <p>Validation message length: {props.inputLength}</p>
      <p>Validation message: {validationMessage}</p>
    </div>
  )
}

export default validation;