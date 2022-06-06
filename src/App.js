import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import {Paper, List, Container} from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 0, title: "Hello World 1", done: true},
        {id: 1, title: "Hello World 2", done: false},
      ], 
    };
  }
  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
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
          <AddTodo />
          <div className='App'>{todoItems}</div>;        
        </Container>
      </div>
    );
  }
}

export default App;
