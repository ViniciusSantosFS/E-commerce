import React from 'react';
import ReduxProvider from './store/store';
import Routes from './Routes'

function App() {
  return (
    <ReduxProvider>
      <Routes />
    </ReduxProvider>
  );
}

export default App;
