import React, { memo } from 'react';
import { Todo } from './TodoList';

export interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem = memo(({todo, removeTodo, toggleTodo}: TodoItemProps) => {
  console.log('rerender', todo.text)
  return (
    <div style={{margin: '1em'}}>
      <input style={{marginRight: '2em'}} type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
        <span style={{marginRight: '2em'}}>{todo.text}</span>

        <button onClick={() => removeTodo(todo.id)}>Remove</button>
      {/*<span>Render Count: {renderCount.current}</span>*/}
      {/*<span>{todo.text}</span>*/}
      {/*<input type="checkbox" checked={todo.completed} />*/}
    </div>
  );
});

export default TodoItem;
