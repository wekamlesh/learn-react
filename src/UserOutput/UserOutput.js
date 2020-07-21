import React from "react";
import "./UserOutput.css";
const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>UserName: {props.userName}</p>
      <p>Some Other random text overwritten!</p>
    </div>
  );
};

export default userOutput;
