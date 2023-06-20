import React, { useEffect, useState } from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [poopShowFlag, setPoopShpwFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  useEffect( () => {
    if (num > 0) {
      if (num % 3 == 0) {
        poopShowFlag || setPoopShpwFlag(true);
      } else {
        poopShowFlag && setPoopShpwFlag(false);
      }
    }
  }, [num]);

  const onClickSwitchShowFlag = () => {
    setPoopShpwFlag(!poopShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <h1 style={{ color: "blue" }}>ぼくドラえもん</h1>
      <ColorfulMessage color="blue">どこでもドア</ColorfulMessage>
      <ColorfulMessage color="green">ビッグライト</ColorfulMessage>
      <ColorfulMessage color="yellow">タケコプター</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {poopShowFlag && <p>💩</p>}
    </>
  );
};

export default App;
