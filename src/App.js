import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

//Animation
import { AnimatePresence } from "framer-motion";

import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <ScrollTop />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {" "}
          //location and key is Asked by framer motion and exit before enter is
          to wait entering animations for exit animations.
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
