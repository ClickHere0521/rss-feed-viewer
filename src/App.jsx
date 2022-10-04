import { Fragment } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
      <BackToTop />
    </Fragment>
  );
}

export default App;
