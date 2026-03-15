import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <button className="menu-toggle" onClick={handleToggleMenu}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={handleCloseMenu}>About</a>
        <a href="#skills" onClick={handleCloseMenu}>Skills</a>
        <a href="#projects" onClick={handleCloseMenu}>Projects</a>
        <a href="#activities" onClick={handleCloseMenu}>Activities</a>
        <a href="#contact" onClick={handleCloseMenu}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
