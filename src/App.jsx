import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
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