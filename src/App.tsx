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
        <p>
          <small>
            a friendly reminder that this is <strong>not in any way</strong> finished
          </small>
          <br />
          <small>please be kind to my creation</small>
        </p>
      </footer>
    </div>
  );
};

export default App;
