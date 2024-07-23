import './App.css';
import { useState } from 'react';
import Sub from './Sub';

function App() {
  //let number = 1; // 상태 값 아님
  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1); // 리액트한테 number 값 변경할께라고 요청
    console.log('add', number);
  };

  return (
    <div>
      <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}

export default App;
