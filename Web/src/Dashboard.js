import React, { Component } from 'react'
//import { Provider } from 'redux'
import logo from './logo.svg'
import './App.css'
import Customers from './components/Customer/customers'

class Dasboard extends Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <h1 className="App-title">React/Redux Express Starter</h1>
        </header>
        < Customers />
      </div>
    )
  }
}

export default App
