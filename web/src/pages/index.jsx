import React from 'react';
import "./indexpage.css";
import Navbar from '../navbar/navbar.jsx';
function App() {
  return (
    <div className="Page">
      <Navbar>
    
      </Navbar>
      
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
        <h1>Sharing Stories, Building Community</h1>
        <p>This is a simple homepage built with Vanilla React JSX.</p>

        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#storyarchives">Story Archives</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <section id="about">
          <h2>About</h2>
          <p>This section talks about the purpose of the site.</p>
        </section>

        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>Simple React Setup</li>
            <li>No Routing</li>
            <li>Clean JSX Structure</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
        </section>
      </div>
    </div>
  );
}

export default App;
