import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Products from './Pages/Products';


function App() {
  const location = useLocation()

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} href="/products">Products</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
