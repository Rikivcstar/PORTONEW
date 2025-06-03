import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "remixicon/fonts/remixicon.css";
import { Footer } from "./components/footer.jsx";
import { Preloader } from "./components/Preloader.jsx";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Navbar } from "./components/Navbar.jsx";
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Preloader />
    <div className="container mx-auto px-5">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
