/** @format */

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Products"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const NoMatch = lazy(() => import("./Components/NoMatch"));

const App = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <button
        className="bg-green-200 p-4 rounded-3xl"
        onClick={handleThemeSwitch}
      >
        Dark Mode
      </button>
      <div className=" bg-white dark:bg-black">
        <NavBar />
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
