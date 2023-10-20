import './App.css';
import News from './Components/News';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
