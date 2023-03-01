import React, { memo, useRef, useState } from 'react';

const BasicMemo = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
};

const Greeting =
  memo(
    function Greeting({ name }: {name: string}) {
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
