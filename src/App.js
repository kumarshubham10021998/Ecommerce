import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RouteLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Cards" element={<Cards />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
