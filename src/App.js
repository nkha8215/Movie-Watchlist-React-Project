import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import Browse from './pages/Browse';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
