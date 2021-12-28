import EmployeeCard from './components/EmployeeCard';
import Header from './components/Header';
import SearchEmployees from './components/SearchEmployees';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchEmployees />
      <EmployeeCard />
      <Footer />
    </div>
  );
}

export default App;
