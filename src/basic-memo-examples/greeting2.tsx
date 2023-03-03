import React, { memo } from 'react';

const Greeting2 = memo(() => {
  console.log('greeter2 rerendered');
  return (
    <div>
      Hello there
    </div>
  );
});

export default Greeting2;
