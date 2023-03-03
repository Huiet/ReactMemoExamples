import React, { memo, useRef, useState } from 'react';
import Greeting2 from './greeting2';

const BasicMemo = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <h2>Basic Memo</h2>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br/>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
      <Greeting2/>
    </>
  );
};



const Greeting =
  memo(
    function Greeting({ name }: {name: string}) {
      console.log('greeting 1 rerendered');
  const ref = useRef(0);
  ref.current = ref.current + 1;
  return (
    <>
      <h3>Hello{name && ', '}{name}!</h3>
      <div>Greeting Component Render count: {ref.current}</div>
    </>
  );
}
);



export default BasicMemo;
