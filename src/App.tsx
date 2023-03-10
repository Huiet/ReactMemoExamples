import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContextParent from './context-example/ContextParent';
import BasicMemo from './basic-memo-examples/BasicMemo';
import TodoList from './basic-memo-examples/todoList/TodoList';
import MemoCalc from './basic-memo-examples/MemoCalc';

function App() {
  const [count, setCount] = useState(0)
  const [showTodoList, setShowTodoList] = useState(false);
  const [showBasicMemo, setShowBasicMemo] = useState(false);
  const [showContextMemo, setShowContextMemo] = useState(false);
  const [showMemoCalc, setShowMemoCalc] = useState(false);
  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div style={{display: 'flex', gap: '1em' }}>
        <button onClick={() => setShowTodoList(!showTodoList)}>Toggle TodoList</button>
        <button onClick={() => setShowBasicMemo(!showBasicMemo)}>Toggle BasicMemo</button>
        <button onClick={() => setShowContextMemo(!showContextMemo)}>Toggle ContextMemo</button>
        <button onClick={() => setShowMemoCalc(!showMemoCalc)}>Toggle MemoCalc</button>
      </div>

      {
        showMemoCalc && <MemoCalc/>
      }

      {
        showContextMemo && <ContextParent/>
      }

      {
        showBasicMemo && <BasicMemo/>
      }


      {
        showTodoList && <TodoList/>
      }

      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src="/vite.svg" className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://reactjs.org" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </div>
  )
}

export default App
