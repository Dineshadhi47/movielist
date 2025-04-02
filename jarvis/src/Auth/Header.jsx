import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo"><img src="PVRlogo.png" alt="" /></div>
      <nav className="nav">
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><Link to="/movielist">Now Showing</Link></li>
          <li><a href="/UpcomingMovies">Upcoming</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search movies..." className="search-input" />
      </div>
    </header>
  );
}
