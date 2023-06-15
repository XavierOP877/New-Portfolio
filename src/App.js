import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./assets/css/styles.css";
import ScrollToTop from "react-router-scroll-top";

import Home from "./pages/home";
import Design from "./pages/design";
import About from "./pages/about";

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import Contact from "./components/layout/contact";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/about" component={About} />
          <Contact />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
