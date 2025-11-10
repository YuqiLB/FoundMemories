import './navbar.css'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '/assets/images/fmlogo.webp';


const navItems = [
  { name: 'Impacts', link: 'impacts' },
  { name: 'Events', link: 'events' },
  { name: 'Get Involved', link: 'getinvolved' },
  { name: 'Contact Us', link: 'contact' },
  { name: 'Story Archives', link: 'storyarchives' },
];

const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logoImage} alt="FoundMemories Logo" className="logo-image" />
        <span className="logo-text">FoundMemories</span>
      </Link>
      
      <button 
        id="open-sidebar-button"
        className="mobile-menu-open" 
        onClick={toggleMenu}
        aria-label="Toggle Side Navigation"
      >
        <img src="/assets/images/navopener.png" alt="navopener" />
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <button 
          id="close-sidebar-button"
          className="mobile-menu-close"
          onClick={toggleMenu}
          aria-label="Close Sidebar"
        >
          <img src="/assets/images/navcloser.png" alt="navcloser" />
        </button>
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            {item.name === 'Story Archives' ? (
              <Link 
                to="/archives" 
                className="nav-button"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a 
                href={item.link} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default navbar;
