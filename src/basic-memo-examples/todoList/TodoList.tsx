import React, { useCallback, useState } from 'react';
import TodoItem from './TodoItem';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = (text: string) => {
    if(!text) { return; }
    const newTodos: Todo[] = [...todos, { id: todos.length + 1, text, completed: false }];
    setTodos(newTodos);
  }

  const removeTodo = (id: number) => {
    const newTodos: Todo[] = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const removeTodoUseCallback = useCallback(
    (id: number) => {
      const newTodos: Todo[] = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    }, []);

  // const addTodoUseCallback = useCallback(
  //   (text: string) => {
  //     const newTodos: Todo[] = [...todos, { id: todos.length, text, completed: false }];
  //     setTodos(newTodos);
  //   },
  //   [],
  // );



  return (
    <div>
      <h2>Todo List</h2>
      <input value={todoText} onChange={e => setTodoText(e.target.value)} />
      <button onClick={() => addTodo(todoText)}>Add Todo</button>
      {todos.map(todo => (
        // <TodoItem todo={todo} removeTodo={removeTodo}/>
        // note: passing the callback prevents rerender on this components state change, for all items in the list
        // breaks if any non memoized piece is passed down or a non memoized context is referenced
        <TodoItem todo={todo} removeTodo={removeTodoUseCallback}/>

      ))}
    </div>
  );
};

export default TodoList;

