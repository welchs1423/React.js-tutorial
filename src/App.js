import React, { Component } from 'react';
import './App.css';

class Subject extends Component { // Subject 라는 Component를 만들겠다.
  render(){ // function 생략.
    return (  // Component는 하나의 최상위 태그를 써야 한다.
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component { // Table Of Content
  render(){
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}

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
