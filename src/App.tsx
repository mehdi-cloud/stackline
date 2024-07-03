import { createContext, useEffect, useState } from 'react';
import './App.css';
import MetricsTable from './components/MetricsTable';
import NavBar from './components/NavBar';
import { ProductTab } from './components/ProductTab';
import { userReviews } from './userReviews';

export const UserContext = createContext(userReviews)

function App() {
  return (
    <UserContext.Provider value={userReviews}>
      <div className="App">
        <NavBar />
        <div className='container'>
          <div className='ProductTab'>
            <ProductTab />
          </div>
          <div className='MetricsTable'>
            <MetricsTable />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
