import React, { memo } from 'react';
import { Todo } from './TodoList';

export interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
}

const TodoItem = memo(({todo, removeTodo}: TodoItemProps) => {
  console.log('todoItem rerender', todo.text)
  return (
    <div >
        <span>{todo.text}</span>
        <input type="checkbox" checked={todo.completed} />
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
      {/*<span>Render Count: {renderCount.current}</span>*/}
      {/*<span>{todo.text}</span>*/}
      {/*<input type="checkbox" checked={todo.completed} />*/}
    </div>
  );
});

export default TodoItem;
