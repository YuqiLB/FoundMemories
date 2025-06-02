
const Navbar = () => {
  const navItems = [
    { name: 'Our Mission & Story', link: '#mission' },
    { name: 'Impacts', link: '#impacts' },
    { name: 'Events', link: '#events' },
    { name: 'Get Involved', link: '#get-involved' },
    { name: 'Contact Us', link: '#contact' },
  ];

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name} style={styles.navItem}>
            <a href={item.link} style={styles.navLink}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  navItem: {
    margin: '0.5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Navbar;
