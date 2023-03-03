import React, { createContext, ReactNode, useMemo, useState } from 'react';


export const CounterContextMemo = createContext({
  name: '',
  count: 0,
  increment: () => {},
  decrement: () => {}
});

const ProviderWithMemo = ({children }: any) => {
  const [count, setCount] = useState(0);


  const value = useMemo( () => ({
    name: 'ProviderWithMemo',
    count: count,
    increment: () => { console.log('8ount', count); setCount(count + 1)},
    decrement: () => setCount(count - 1),
  }), [count]);
  return (
    <CounterContextMemo.Provider value={value}>{children}</CounterContextMemo.Provider>
  );
};

export default ProviderWithMemo;
