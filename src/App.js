import EmployeeCard from './components/EmployeeCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Header
        </a>
      </header>
      <EmployeeCard/>
    </div>
  );
}

export default App;
