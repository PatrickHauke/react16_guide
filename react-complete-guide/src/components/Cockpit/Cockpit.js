import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = '';
  if (props.showPersons){
    btnClass = classes.Red;
  }

  if (props.persons.length <=2){
    assignedClasses.push(classes.red);
  }

  if(props.persons.length <=1){
    assignedClasses.push(classes.bold)
  }

  return(
    <div className={classes.Cockpit}>
      <p>Hello World!</p>
      <p className={assignedClasses.join(' ')}>Here is some content</p>
      <button
        onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  )
}

export default cockpit;
