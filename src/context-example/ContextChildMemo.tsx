import React, { memo, useContext, useRef } from 'react';
import { CounterContextMemo } from './contexts/ProviderWithMemo';

const ContextChildMemo = memo(() => {
  const context = useContext(CounterContextMemo);
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;
  return (
    <div className={'box'}>
      With Memo
      <div>Count:{context.count}</div>
      <div>RenderCount:{renderCount.current}</div>
      <button onClick={context.increment}>Increment</button>
      <button onClick={context.decrement}>Decrement</button>
    </div>
  );
});

export default ContextChildMemo;
