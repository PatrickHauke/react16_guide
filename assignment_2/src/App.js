import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {
  state = {
    val: '',
    ct: 0
  }

  returnCountHandler = (event) => {
    const stringCount = event.target.value.length;
    this.setState(
      {val: event.target.value, ct: stringCount}
    )
  }
  render() {
    return (
      <div className="App">
        <input 
          onChange={(event)=>this.returnCountHandler(event)}
        />
        <p>{this.state.ct}</p>
        <Validation len={this.state.ct} />
        <div>
          {console.log(this.state.val.split(''))}
          {this.state.val.split("").forEach(
            (data, index)=> {
              return <Char val={data[index]}/>
            }
          )}
        </div>
      </div>
    );
  }
}

export default App;
