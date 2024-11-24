import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import NavComponent from './components/navigation/NavComponent';
import Hero from './components/hero/Hero';
import AlbumDetail from './components/home/albumdetail/AlbumDetail';  // Import AlbumDetail component

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Routes>
          <Route path="/" element={<Hero />} />  {/* Home route */}
          <Route path="/album/:id" element={<AlbumDetail />} />  {/* Album Detail page route with dynamic ID */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
