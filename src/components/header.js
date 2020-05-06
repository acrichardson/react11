import React, { Component } from 'react';

// const getTheYear = () => {
//   const newsDate= new Date();
//   return newsDate.getFullYear()
// }

  // return <div>The date is {getTheYear() } </div>

class Header extends Component {

  state = {
    title: 'the keywords are: ',
    keywords: '',
    // count: 0,
  }

  inputChange(event){
    this.setState({
      keywords: event.target.value
    })
  }

  addOne(){
    this.setState((state, props) => ({
      count: state.count +1
    }))
  }

  render() {
    return(
      <header>
        <div
        className= 'logo'>Logo</div>
        <input
          onChange={ (event) => this.inputChange(event) }
        />
        <div>{ this.state.title }</div>
        <div>{ this.state.keywords }</div>


        <br/>
        <div>{this.state.count}</div>
        <div onClick={ () => this.addOne() } >Add one</div>
      </header>
      )
    }
}

export default Header;

// git check 3
