import React, { Component } from 'react';
import logo from './logo.jpg';
import Menu from './Sidebar';
import Main from './Main';
import News from './News';
import './App.css';

const NewsContent = [
  {
    title: 'Lorem ipsum dolor sit amet',
    announce: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
   {
    title: 'Мы лауреаты',
    announce: 'Передовые решения «Альфа-Капитал» по онлайн-сервисам.'
  },
  {
    title: "Lorem ipsum dolor sit",
    announce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ipsum reprehenderit eius, obcaecati id magnam, neque qui quia nisi quod exercitationem ducimus alias nulla ab."
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">SiteName</h1>
          </div>
        </header>
        <div className="content">
          <div className="container clearfix">
            <main className="main">             
              <Main />
              <News data={NewsContent} />             
            </main>
            <aside className="sidebar">
              <Menu />
            </aside>            
          </div>
        </div>
        <footer>
          <div className="container">
             <p>&copy; Сopyright</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
