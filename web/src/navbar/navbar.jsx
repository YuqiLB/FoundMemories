import React from 'react';
import '../pages/indexPage.css'; // or separate navbar.css if preferred

const navItems = [
  { name: 'Our Mission & Story', link: '#mission' },
  { name: 'Impacts', link: '#impacts' },
  { name: 'Events', link: '#events' },
  { name: 'Get Involved', link: '#get-involved' },
  { name: 'Contact Us', link: '#contact' },
];

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">🌿 FoundMemories</div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name} className="nav-link">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
