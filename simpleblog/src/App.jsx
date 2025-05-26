import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Pages/Posts";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Postdetails from "./Pages/Postdetails";
import Category from "./Pages/Category";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:id" element={<Postdetails />} />
          <Route path="/posts/Category/:id" element={<Category />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
