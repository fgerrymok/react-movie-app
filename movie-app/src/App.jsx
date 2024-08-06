import "./styles/Normalize-fwd.css";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Favourites from "./pages/FavouritesPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <BrowserRouter>
      <Context.Provider value={[favourites, setFavourites]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}

export const Context = React.createContext();
export default App;
