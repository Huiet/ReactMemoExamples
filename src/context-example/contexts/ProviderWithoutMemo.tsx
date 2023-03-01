import { createContext, useState } from "react";

export const CounterContextWithoutMemo = createContext({
  name: '',
  count: 0,
  increment: () => {},
  decrement: () => {}
});

function ProviderWithoutMemo( {children}: any) {
  const [count, setCount] = useState(0);

  const value: any = {
    name: "ProviderWithoutMemo",
    count: count,
    increment: () => setCount((c) => c + 1),
    decrement: () => setCount(count - 1),
  };

  return <CounterContextWithoutMemo.Provider value={value}>{children}</CounterContextWithoutMemo.Provider>;
}

export default ProviderWithoutMemo;
