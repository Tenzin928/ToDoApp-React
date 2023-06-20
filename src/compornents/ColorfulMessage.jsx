import React from "react";

const ColorfulMessage = (props) => {

	console.log(props);
	
	console.log(props);

  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };

  return <p style={contentStyle}>ぼくドラえもん</p>;
};

export default ColorfulMessage;