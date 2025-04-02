import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import MovieList  from './Auth/MovieList'
import Header from './Auth/Header'
import Home from "./Auth/Home";
import UpcomingMovies from "./Auth/UpcomingMovies"; // Ensure the filename and import match
import ContactForm from "./Auth/contact";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Home/>
      <Routes>
        <Route path="#" element={<Home/>} />
        <Route path="/movielist" element={<MovieList />} />   
        <Route path="/UpcomingMovies" element={<UpcomingMovies />} />
        <Route path="/Contact" element={<ContactForm />} /> 
      </Routes>
    </Router>
  )
}

export default App
