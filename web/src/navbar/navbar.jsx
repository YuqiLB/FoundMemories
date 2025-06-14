import React from 'react';
import '../pages/indexPage.css'; // or separate navbar.css if preferred

const navItems = [
  { name: 'Impacts', link: 'impacts' },
  { name: 'Events', link: 'events' },
  { name: 'Get Involved', link: 'get-involved' },
  { name: 'Contact Us', link: 'contact' },
  { name: 'Story Archives', link: 'storyarchives' },
];

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">🌿 FoundMemories</div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            {item.name === 'Story Archives' ? (
              <button
                className="nav-button"
                onClick={() => {
                  document.getElementById('storyarchives')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </button>
            ) : (
              <a href={item.link} className="nav-link">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
