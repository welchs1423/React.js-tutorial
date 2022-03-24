import React, { Component } from 'react';
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  render() {
    return (  // "", \ 같은 것들을 안써도 되도록 페이스북에서 만든 언어 jsx
              // jsx를 코딩하면 create react app이 자바스크립트로 코딩 해준다.
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
