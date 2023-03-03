import React, { memo, useCallback, useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState('');
  console.time('todoList');
  const addTodo = (text: string) => {
    if(!text || todos.some(x => x.text === text)) { return; }
    const newTodos: Todo[] = [...todos, { id: uuidv4(), text, completed: false }];
    setTodos(newTodos);
  }

  // callback version
  // const removeTodo = useCallback(
  //   (id: string) => {
  //     let count = 4;
  //     // for(let i = 0; i < 1000000000; i++) {
  //     //   count++;
  //     // }
  //     const newTodos: Todo[] = todos.filter(todo => todo.id !== id);
  //     setTodos(newTodos);
  //   }, [todos]); // without dependency it gets wacky

  // callback version
  // const toggleTodo = useCallback((id: string) => {
  //   console.log('todos', todos);
  //   const newTodos: Todo[] = todos.map(todo => {
  //     if(todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed
  //       }
  //     }
  //     return todo;
  //   });
  //   console.log('newTodos', newTodos);
  //   setTodos(newTodos);
  // }, [todos]); // removing dependency causes it to reset to todos initial state on toggle


  // non callback version
  const toggleTodo = (id: string) => {
    const newTodos: Todo[] = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  // non callback version
  const removeTodo = (id: string) => {
      let count = 4;
      // note: this doesn't have much effect on anything because we are just defining a function
      for(let i = 0; i < 10000033232320000; i++) {
        count++;
      }
      const newTodos: Todo[] = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    };



  // const addTodoUseCallback = useCallback(
  //   (text: string) => {
  //     const newTodos: Todo[] = [...todos, { id: todos.length, text, completed: false }];
  //     setTodos(newTodos);
  //   },
  //   [],
  // );

  console.timeEnd('todoList');

  return (
    <div>
      <h2>Todo List</h2>
      <div style={{marginBottom: '1em'}}>
      <input style={{marginRight: '2em'}} value={todoText} onChange={e => setTodoText(e.target.value)} />
      <button onClick={() => addTodo(todoText)}>Add Todo</button>
      </div>
      {todos.map(todo => (
        // <TodoItem todo={todo} removeTodo={removeTodo}/>
        // note: passing the callback prevents rerender on this components state change, for all items in the list
        // breaks if any non memoized piece is passed down or a non memoized context is referenced
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo}/>

      ))}
    </div>
  );


};

export default TodoList;

