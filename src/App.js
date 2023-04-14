import React, { Component } from "react";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      favouriteColor: 'crimson'
    };
  }


  // 1-misol
  // getData() {
  //   setTimeout(() => {
  //     console.log('Our data is updated')
  //     this.setState({data: 'John Doe'})
  //   }, 3000)
  // }


  // 2-misol
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => this.setState({posts: data, loading: false}))

  //   this.timerId = setInterval(() => {
  //     fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then(response => response.json())
  //     .then(data => this.setState({comments: data}))
  //   }, 3000)
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // 3-misol
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({favouriteColor: 'yellow'})
    }, 3000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    document.querySelector('p').innerHTML = "The updated favourite is " + this.state.favouriteColor
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <p>My favourite color is {this.state.favouriteColor}</p>
      </div>
    );
  }
}

export default App;