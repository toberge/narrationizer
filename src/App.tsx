import React from 'react';
import './App.css';
import { FormContainer } from './components/InputBox';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>hi there</h1>
      </header>
      <main>
        <FormContainer />
      </main>
      <footer>
        <small>bye there</small>
      </footer>
    </div>
  );
};

export default App;
