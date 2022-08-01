import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import Browse from './pages/Browse';
import FilmInfo from './pages/FilmInfo'
import Watchlist from './pages/Watchlist';


function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:id" element={<FilmInfo />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
