import React, { Component } from 'react'
//import { Provider } from 'redux'

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: {}
    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json)
      .then(customers => this.setState({ customers }, () => console.log(customers)))
  }

  render () {
    return (
      <div className="Customers">
        <h2>Customers</h2>
      </div>
    )
  }
}

export default Customers
