// 중괄호가 있다는 건 파일의 export default function이 아니라는 의미
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [data, setData] = useState(0);

  const download = () => {
    // 다운로드 받고 (통신)
    let downloadData = 5;
    setData(downloadData);
  };

  // 실행시점
  // (1) App() 함수가 최초 실행될 때(최초 렌더링 시점)
  // (2) 상태 변수가 변경될 때
  useEffect(() => {
    console.log('useEffect 실행됨!');
    download();
  }, []);

  return (
    <div>
      <h1>데이터 : {data}</h1>
      <button on onClick={() => setData(data + 1)}>
        더하기
      </button>
    </div>
  );
}

export default App;
