import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { AppProvider } from './context';
function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Hero />
        <Submenu />
        <Sidebar />
      </AppProvider>
    </>
  );
}

export default App;
