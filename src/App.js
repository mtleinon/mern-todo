import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducers';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const store = createStore(
  todoApp,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <div style={{ marginLeft: '100px' }}>
        <Provider store={store}>
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
        </Provider>
      </div>
    );
  }
}

export default App;
