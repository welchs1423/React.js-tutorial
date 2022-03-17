import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyReactApp from './App';    // 'App'은 다른 이름으로 변경 할수 있음.(첫 글자는 대문자 여야 함)
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <MyReactApp />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
