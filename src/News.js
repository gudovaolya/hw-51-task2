import React, { Component } from 'react';
import './News.css';

class NewsItem extends React.Component {
  render() {
    return (
      <div className="news-item">
        <h4><a href="">{this.props.title}</a></h4>
        <p>{this.props.announce}</p>
      </div>
    );
  }
}

class NewsList extends Component {
  render() {
    var newsBlock = this.props.data.map(function(item){
      return(
        <NewsItem title={item.title} announce={item.announce} />
      );

    });
   
    return(
      <div className="news-list">
        {newsBlock}
      </div>
    );
  }  
}


class News extends Component {
  render() {
    return (
      <div className="news-block">
        <h3>Последне новости</h3>
        <NewsList data={this.props.data} />
      </div>
    );
  }
}

export default News;
