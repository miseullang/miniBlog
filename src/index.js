import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* => 리액트의 strict 모드는 개발 모드임
    => 문제가 있는지 없는지 개발 모드에서 알 수 있도록 하는 것
    => 개발시 발생되는 버그를 찾을 수 있게 해주는 컴포넌트
    => 제품모드에서 동작하지는 않음
    => props가 없고 부모에서 strict모드로 선언되면 모든 자식에 대해서 strict모드가 실행됨
    => 컴포넌트가 불완전한 렌더링으로 인한 버그를 찾기 위해서 재랜더링하는 것을 의미
    (항상 렌더링을 2번 실행함)
    => 불필요한 div 형식의 부모 태그를 줄일 수 있음 */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
