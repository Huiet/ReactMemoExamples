import React, { memo, useContext, useRef } from 'react';
import { CounterContextWithoutMemo } from './contexts/ProviderWithoutMemo';

// Note: notice wrapping the component in memo does not help if the context is not memoized
const ContextChild = memo(() => {
  const context = useContext(CounterContextWithoutMemo);
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;
  return (
    <div className={'box'}>
      Without Memo
      <div>Count:{context.count}</div>
      <div>RenderCount:{renderCount.current}</div>
      <button onClick={context.increment}>Increment</button>
      <button onClick={context.decrement}>Decrement</button>
    </div>
  );
});


export default ContextChild;
