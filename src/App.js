import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import {Paper, List, Container} from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], 
    };
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items: thisItems});
    console.log("items :", this.state.items);
  }

  delete = (item) => {
    const thisItems = this.state.items;
      console.log("Before Update Items : ", this.state.items)
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({items: newItems}, () => {
      console.log("Update Items : ", this.state.items)
    });
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} />
          ))}
        </List>
      </Paper>
    );

    /*
    //자바스크립트가 제공하는 map 함수를 이용해 배열을 반복해 <Todo.../> 컴포넌트 생성
    var todoItems = this.state.items.map((item, idx) => (
      <Todo item={item} key={item.id} />
    ));
    */

    //생성된 컴포넌트 리턴
    return (
      <div className='App'>
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className='TodoList'>{todoItems}</div>       
        </Container>
      </div>
    );
  }
}

export default App;
