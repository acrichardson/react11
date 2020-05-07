import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import NewsList from './components/news_list';
import './styles.css';
import JSON from './db.json';
import Footer from './components/footer';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class App extends Component {

    state = {
      news:JSON,
      filtered: [],
      footerText:'I am a footer'
    }

  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1

    })

    this.setState({
      filtered: filtered
    })
  }

  render(){
    const state = this.state;
    let newsFiltered = state.filtered
    let newsAll = state.news
    return (
      <div>
        <Header keywords={this.getKeywords}/>
        <NewsList news={newsFiltered.length === 0 ? newsAll : newsFiltered }>          <br/>
          <h1>I am a children</h1>
        </NewsList>

        <Footer footerText={this.state.footerText} />
      </div>
      )
  }
}



ReactDOM.render(<App/>, document.getElementById('root'));
