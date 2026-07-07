import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Главная</Link>
        <Link to="/products">Каталог</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;