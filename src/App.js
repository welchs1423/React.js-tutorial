import React, { Component } from 'react';
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props){ // 어떤 component가 실행 될때 render보다 먼저 실행 되면서 component를 초기화 시키기 위한 코드
    super(props);
    this.state = {
      mode:'read',  // read일 경우 30번째 줄의 코드가 실행되고 welcome일 경우 27번째 줄의 코드가 실행됨
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }

  // react에서는 props의 값이나 state의 값이 바뀌면 해당되는 component의 render함수가 호출되도록 약속 되 있다.
  // props나 state가 바뀌면 화면이 다시 그려진다.

  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);  // render() 안에서의 this는 render함수가 속해있는 component 자체를 가리킨다.
    return (  // "", \ 같은 것들을 안써도 되도록 페이스북에서 만든 언어 jsx
              // jsx를 코딩하면 create react app이 자바스크립트로 코딩 해준다.
      <div className="App">
        {/* <Subject
         title={this.state.subject.title}
         sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log('event in', this);
            e.preventDefault();
            return;
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome'; 리액트에서는 밑의 코드를 사용해야 한다.
            this.setState({
              mode:'welcome'
            });
            /* 자바스크립트는 onclick="" 를 사용하고.
            리액트에서는 onClick={}를 사용한다고 함.*/
          }.bind(this)
            // 위의 에러를 해결해주는 '.bind(this)'
          }>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
