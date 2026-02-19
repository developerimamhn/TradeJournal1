import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import LenisProvider from './LenisProvider';
import Loader from './components/Loader';

function App() {
  return (
    <LenisProvider>
      <Loader />
      <Header />
      <Body />
    </LenisProvider>
  );
}

export default App;
