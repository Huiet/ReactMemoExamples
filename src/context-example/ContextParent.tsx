import React, { useState } from 'react';
import ProviderWithMemo from './contexts/ProviderWithMemo';
import ProviderWithoutMemo from './contexts/ProviderWithoutMemo';
import ContextChildMemo from './ContextChildMemo';
import ContextChild from './ContextChild';

const ContextParent = () => {
  const [,forceRender] = useState();
  return (
    <div>
      <h2>Context Parent Component</h2>

      <ProviderWithMemo>
        <ContextChildMemo/>
      </ProviderWithMemo>

      <ProviderWithoutMemo>
        <ContextChild/>
      </ProviderWithoutMemo>


      <button onClick={() => forceRender({} as any)}>Force Render</button>
    </div>
  );
};

export default ContextParent;
