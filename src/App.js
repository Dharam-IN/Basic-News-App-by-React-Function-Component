import './App.css';
import News from './Components/News';
import Navbar from './Components/Navbar';
import BusinessNews from './Components/Business';
import TechnologyNews from './Components/Technology';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<News pageSize={10}/>} />
          <Route path="business" element={<BusinessNews pageSize={10}/>} />
          <Route path="technology" element={<TechnologyNews pageSize={10}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
