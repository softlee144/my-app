import './App.css';
import { useState } from 'react';
import Sub from './Sub';

function App() {
  console.log('App start');
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '강감찬' },
  ];

  const [users, setUsers] = useState(sample); // 레퍼런스가 변경되야 동작!!

  const download = () => {
    setUsers([...sample]);
  };

  // 렌더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
