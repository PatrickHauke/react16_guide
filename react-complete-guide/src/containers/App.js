import React, { Component } from 'react';
import classes from './App.css';
// import Persons from '../components/Persons/Person'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  state = {
    persons: [
      {id: '12qse', name: 'Patrick', age: 23},
      {id: '45djfj', name: 'Kajol', age: 21},
      {id: '82sk',name: 'Mishka', age: 8}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // Remember, needs to be immutable
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    // Flip the boolean
    console.log('Trigger');
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    }

    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
            {persons}
        </div>
    );
  }
}

// Higher order component which injects additional syntax and features
export default App;
