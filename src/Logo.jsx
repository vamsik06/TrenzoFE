import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/trenzo-logo.png'; // Import the image
import './assets/styles.css'; // Import external CSS

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div>
      <span className="logo-text" onClick={() => navigate('/customerhome')} style={{cursor: 'pointer'}}>Trenzo</span>
    </div>
  );
}
