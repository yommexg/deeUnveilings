// import { useState } from "react";
// import { ToastContainer } from "react-toastify";

import {
  About,
  Bookings,
  Contact,
  Footer,
  Header,
  Portfolio,
} from "./components";

// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Bookings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
