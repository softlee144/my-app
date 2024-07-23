import logo from './logo.svg';
import './App.css';

// 0. React - 데이터 변경감지해서 UI 그려주는 엔진
// 1. 실행방식 - SPA
// 2. jsx 문법
// 3. 바벨(ES5) -> ES6
function App() {
  let number = 1;

  const add = () => {
    number++;
    console.log('add', add);
  };

  return (
    <div>
      <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
    </div>
  );
}

export default App;
