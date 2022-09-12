import React from 'react';
import './styles/App.css';
import Zilly from './components/Zilly';

function App() {
  return (
    <div className="App">
      <section className='chatbot-area'>
        <Zilly />
      </section>
    </div>
  );
}

export default App;
