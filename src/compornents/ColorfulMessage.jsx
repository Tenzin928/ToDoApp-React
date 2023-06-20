import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "18px",
  };

  return (
    <>
      <ul>
        <li>
          <p style={contentStyle}>{children}</p>
        </li>
      </ul>
    </>
  );
};

export default ColorfulMessage;
