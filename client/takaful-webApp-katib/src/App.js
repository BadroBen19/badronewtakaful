import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Testimonies from "./Pages/Testimonies";
import Categories from "./Pages/Categories";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch category data from backend API
    const fetchCategories = async () => {
      try {
        const response = await axios.get("YOUR_BACKEND_API_ENDPOINT");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        
        <Routes>
          {/* Render Categories dynamically */}
          {categories.map((category) => (
            <Route
              key={category.id}
              path={`/c${category.id}`}
              element={<Categories category={category} />}
            />
          ))}
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Testimonies />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
