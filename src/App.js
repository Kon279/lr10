import React from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <Navbar />
      <CartContainer />
    </AppProvider>
  );
}

export default App;