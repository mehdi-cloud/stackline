import './App.css';
import MetricsTable from './components/MetricsTable';
import NavBar from './components/NavBar';
import { ProductTab } from './components/ProductTab';

function App() {
  return (
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
  );
}

export default App;
