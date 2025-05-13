import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './component/pages/home/Home';

// Composants réutilisables
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';

function App() {
  return (
    <>
      <Router>
          <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>

          <Footer />
      </Router>
    </>
  );
}

export default App;