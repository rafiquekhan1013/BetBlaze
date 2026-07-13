import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/500.css"; 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 
import "@fontsource/poppins/800.css"; 
import "@fontsource/poppins/900.css"; 
import "animate.css/animate.compat.css"

function LayoutWithHeaderFooter() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<LayoutWithHeaderFooter />}>
          <Route path="/" element={<Home />} />
          {/* 
          <Route path="about" element={<About />} /> */}
        </Route>

        {/* Route without Header and Footer */}
        {/* <Route path="contact" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
