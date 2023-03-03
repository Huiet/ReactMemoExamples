import React, { useEffect, useMemo, useState } from 'react';


export const realExpensiveCalc = (count: number) => {
  for(let i = 0; i < 1000000000; i++) {
    count++;
  }
  return count;
}


const MemoCalc = () => {
  const [count, setCount] = useState(0);
  const [otherProp, setOtherProp] = useState('some other prop');
  // const [visibleCount, setVisibleCount] = useState(0);
  console.time('memoCalc');
  const increment = () => setCount(count + 1);
  const visibleCount = useMemo(() => realExpensiveCalc(count), [count]);
  // const visibleCount = realExpensiveCalc(count); // no memo

  // useEffect(() => {
  //   setVisibleCount(realExpensiveCalc(count));
  // }, [count]);


  console.timeEnd('memoCalc');

  return (
    <div>
      <h2>Memo Calc</h2>
      <h3>Count In state: {count}</h3>
      <h3>visibleCount function result: {visibleCount}</h3>
      <button onClick={increment}>Increment</button>

      <br/>
      <h3>Other State variable</h3>
      <input value={otherProp} onChange={e => setOtherProp(e.target.value)} />
    </div>
  );
};

export default MemoCalc;
