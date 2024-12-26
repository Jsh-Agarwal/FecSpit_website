import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';  // Adjust the import path based on your file structure

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/reviews" element={<div>Reviews Page</div>} />
        <Route path="/contacts" element={<div>Contacts Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/reports" element={<div>Top Reports Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;