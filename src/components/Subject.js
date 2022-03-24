import React, { Component } from 'react';

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

  export default Subject;