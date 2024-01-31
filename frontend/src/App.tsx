import React from 'react';

import './App.css';
import { MainPage } from '@/pages';
import { Footer, Header } from '@/components/ui';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
