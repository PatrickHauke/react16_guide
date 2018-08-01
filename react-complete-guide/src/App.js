import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person';


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
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* map every element in array to a function */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    // The content inside the return is the "Core Template"
    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if (this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.App}>
          <p>Hello World!</p>
          <p className={assignedClasses.join(' ')}>Here is some content</p>
          <button
            onClick={this.togglePersonsHandler}>
            Toggle Person
          </button>
            {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app'));
  }
}

// Higher order component which injects additional syntax and features
export default App;
