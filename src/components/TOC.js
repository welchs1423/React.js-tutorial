import React, { Component } from 'react';   // 'react'라이브러리에서 Component클래스를 로딩

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

  export default TOC;   // TOC.js 를 가져다 쓰는 코드에서 Class TOC를 사용할수 있게 하는 코드