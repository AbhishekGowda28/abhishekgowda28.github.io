import React from 'react';
import './App.css';
import { Header, Home, Contacts, About, Projects } from './Header';

function App() {
  return (
    <div className="App">
      Hosted in github pages
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
