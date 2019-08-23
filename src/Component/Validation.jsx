import React from "react";

const validation = props => {
  return (
    <div>
      {props.inputLength > 5 ? <p>Text too long</p> : <p>Text too small</p>}
    </div>
  );
};
export default validation;
