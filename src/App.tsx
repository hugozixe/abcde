import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function 평균구하는함수(n1: number, n2: number, n3: number) {
  return (n1 + n2 + n3) / 3;
}

function 미성년자판별(나이: number) {
  // if (나이 < 19) {
  //   return true;
  // } else {
  //   return false;
  // }
  return 나이 < 19 ? true : false;
}

function 클릭했을때동작(좋아요여부: boolean) {
  좋아요여부 = !좋아요여부; 
}

function App() {
  const useState결과값 = useState(false);
  //const count = useState결과값[0];
  //const setCount = useState결과값[1];
  //const [count, setCount] = useState(0);

  const 평균1 = 평균구하는함수(100, 100, 70);
  const 평균2 = 평균구하는함수(70, 70, 70);
  console.log(평균1);
  console.log(평균2);

  const 이름 = "율"
  const 좋아요카운트 = 7;

  const like = useState결과값[0];
  const setLike = useState결과값[1]; 
  
  function 클릭했을때동작() {
    setLike(!like);
  }

  return (
    <>
      <h1>안녕하세요, {이름}!</h1>
      {/* <div>{좋아요카운트 <= 0 ? <h1>카운트 빵</h1> : <h1>{좋아요카운트}</h1>}</div> */}
      {/* <button>좋아요</button> */}
      {like === false ? (
      <button onClick={클릭했을때동작}>좋아요</button>
      ) : (
      <button onClick={클릭했을때동작}>좋아요 취소</button>
      )}
    </>
  );
}

export default App;
