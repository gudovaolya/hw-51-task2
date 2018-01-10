import React, { Component } from 'react';
import Header from './Header';
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
        <Header />
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
        <footer className="footer">
          <div className="container">
             <p>&copy; Сopyright</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
