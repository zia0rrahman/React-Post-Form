import React, { Component } from 'react';
import './App.css';
import PostFrom from './components/PostForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
        <Header />
        <PostFrom />
        </div>
      </div>
    );
  }
}

export default App;
