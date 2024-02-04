import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import the HomePage component
import './App.css';
import BlogPage from './BlogPage';
import Episodes from './Episodes';
import Header from './Header';
import AboutPage from './AboutPage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
