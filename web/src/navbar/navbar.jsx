import '../pages/indexPage.css'; 
import { Link } from 'react-router-dom';
import logoImage from '/assets/images/fmlogo.webp';


const navItems = [
  { name: 'Impacts', link: 'impacts' },
  { name: 'Events', link: 'events' },
  { name: 'Get Involved', link: 'getinvolved' },
  { name: 'Contact Us', link: 'contact' },
  { name: 'Story Archives', link: 'storyarchives' },
];

//<Link to="/" className="logo">
        //<img src={logoImage} alt="FoundMemories Logo" className="logo-image" />
    //    FoundMemories
     // </Link>
const navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
      <img src={logoImage} alt="FoundMemories Logo" className="logo-image" />
      <span className="logo-text">FoundMemories</span>
      </Link>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            {item.name === 'Story Archives' ? (
              <Link to="/archives" className="nav-button">
                {item.name}
              </Link>
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

export default navbar;
