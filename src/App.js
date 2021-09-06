import React from 'react'
import './App.css';
import Daftar from './Daftar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputField : '',
      listTodo: []
    }
  }

  onInputChange = (event) => {
    this.setState({inputField:event.target.value})
  }

  onSumbitList = () => {
    const daftar = [...this.state.listTodo];
    const newList = this.state.inputField;
    daftar.push(newList);
    this.setState({
      listTodo:daftar
    })
  }

  onDel = (event) => {
    var array = [...this.state.listTodo]; // make a separate copy of the array
    var index = array.indexOf(event)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({listTodo: array});
    }
  }


  render(){
    return(
      <div className="container">
        <h1><em>Todo App</em></h1>
        <input type='text' onChange={this.onInputChange} placeholder="Type Your List"/>
        <button type='submit' onClick={this.onSumbitList}>Submit</button>
        <Daftar listTodo={this.state.listTodo} onDel={this.onDel}/>
      </div>
    );
  }
}

export default App;
