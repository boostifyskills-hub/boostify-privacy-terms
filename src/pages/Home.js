import React from 'react';
import { Link } from 'react-router-dom';
import './PolicyPage.css';

const Home = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Boostify Skills - Legal Documents</h1>
        <p>Welcome to the Boostify Skills legal documentation portal.</p>
        <p><em>All documents are available in English, French, and Arabic.</em></p>
        
        <div style={{ marginTop: '40px' }}>
          <h2>Available Documents:</h2>
          <ul style={{ fontSize: '18px', lineHeight: '2' }}>
            <li>
              <Link to="/privacy" style={{ color: '#007bff', textDecoration: 'none' }}>
                Privacy Policy / Politique de Confidentialité / سياسة الخصوصية
              </Link>
            </li>
            <li>
              <Link to="/terms" style={{ color: '#007bff', textDecoration: 'none' }}>
                Terms of Service / Conditions Générales / شروط الخدمة
              </Link>
            </li>
          </ul>
        </div>
        
        <div style={{ marginTop: '60px', fontSize: '14px', color: '#666' }}>
          <p>© 2026 Juniors CV - Boostify Skills. All rights reserved.</p>
          <p>Contact: contact.boostifyskills@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
