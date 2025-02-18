import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
//import Print3D from './pages/Print3D';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

//<Route path="/print3d" element={<Print3D />} />  isso aqui esta na parte de cima dentro da <main className=

export default App;
