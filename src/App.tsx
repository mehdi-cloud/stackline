import React from 'react';
import logo from './logo.svg';
import './App.css';
import MetricsTable from './components/MetricsTable.ts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MetricsTable/>
      </header>
    </div>
  );
}

export default App;
