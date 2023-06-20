import React from "react";
import ColorfulMessage from './compornents/ColorfulMessage';

const contentItemStyle = {
	color: 'green'
}
const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
			<ColorfulMessage color="blue" message="ぼくドラえもん"/>
      <p style={contentItemStyle}>タケコプター</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
