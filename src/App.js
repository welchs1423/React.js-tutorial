import React, { Component } from 'react';
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props){ // 어떤 component가 실행 될때 render보다 먼저 실행 되면서 component를 초기화 시키기 위한 코드
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    return (  // "", \ 같은 것들을 안써도 되도록 페이스북에서 만든 언어 jsx
              // jsx를 코딩하면 create react app이 자바스크립트로 코딩 해준다.
      <div className="App">
        <Subject
         title={this.state.subject.title}
         sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
