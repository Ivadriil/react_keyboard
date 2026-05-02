import React, { useState } from 'react';

export const App: React.FC = () => {
  const [key, setkey] = useState('');
  const [keytru, setKeytru] = useState(false);

  document.addEventListener('keyup', (event: KeyboardEvent) => {
    setkey(event.key);
    setKeytru(true);
  });

  return (
    <div className="App">
      {keytru && (
        <p className="App__message">The last pressed key is [{key}]</p>
      )}
      {!keytru && <p className="App__message">Nothing was pressed yet</p>}
    </div>
  );
};
