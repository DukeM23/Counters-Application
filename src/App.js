import React, { Component } from 'react';

import './App.css';
import Counters from './components/counters'
import NavBar from './components/navbar.jsx'
//import { conditionalExpression } from '@babel/types';

const initialCounters = [
  { id: 1, value: 4 },
  { id: 2, value: 1 },
  { id: 3, value: 3 },
  { id: 4, value: 2 }
];

class App extends Component {
  state = {
    counters: initialCounters
  };

  constructor() {
    super();
    console.log("App-Constructed");
  }

  componentDidMount() {
    console.log("App-Mounted");
  }
  //Cant modify the state directly, so this is the approach that must be taken 
  handleDelete = counterId => {
    //console.log("Handler Event Triggered", counterId);
    //Filters through the state and only maps when there the c.id is not equal to counterId
    const counters = this.state.counters.filter(c => (c.id !== counterId));
    //Accesses the state and overwrittes the counter state with the handleDelete counters 
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Reset Event Has Occured");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    //this.setState({ counters: initialCounters });
  };

  handleIncrement = counter => {
    console.log("Increment Event Handled");
    const incCounter = [...this.state.counters];
    const index = incCounter.indexOf(counter);
    incCounter[index].value++;
    this.setState({ incCounter });
  }

  handleItemReset = state => {
    console.log("Handling Item");
    this.setState({ counters: initialCounters });

  }

  handleAddItem = props => {
    console.log("AddItem Event Handled");
  }

  render() {
    console.log("App-Rendered");
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onItemReset={this.handleItemReset}
          onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;
