import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import NewsList from './components/news_list';
import './styles.css';
import JSON from './db.json';

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
    }


  render(){
    return (
      <div>
        <Header/>
        <NewsList news={this.state.news}/>
      </div>
      )
  }
}



ReactDOM.render(<App/>, document.getElementById('root'));
