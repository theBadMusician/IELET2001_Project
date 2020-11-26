import React, { Component } from 'react';
import Ninjas from './components/NinjaTutorials/Ninjas'
import AddNinja from './components/NinjaTutorials/AddNinja'
import SocketIO from './SocketIO';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.floor(Math.random() * 100000);
    this.setState(prevState => ({
        ninjas: [...prevState.ninjas, ninja]
    }));
    console.log(ninja);
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }

componentDidMount() {
  console.log("component mounted");
}

componentDidUpdate(prevProps, prevState) {
  console.log('component updated');
  console.log(prevProps, prevState);
}

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <SocketIO />
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;