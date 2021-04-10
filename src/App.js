"use strict";
import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoCuO-KYuaQsPqEYUx8zYvMcswYLYqZZGyd_Usx3_eQyomUM7XTyBmFGfcw56Hu_nfEA&usqp=CAU"/>
      </header>  
      <nav className="nav">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <main className="content">
        <div>
          <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGAO9zvVhyAqQ/company-background_10000/0/1539806088038?e=2159024400&v=beta&t=5vq2-UBGsfB5RPQaOHqFEHtmdq47wFGYL27qOMblKwc"/>
        </div>
        <div>Avatar + description</div>
        <div>My posts</div>
        <div>My wall</div>
      </main>
    </div>
  );
}

export default App;
