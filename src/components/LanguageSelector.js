import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="language-selector">
      <select 
        value={currentLanguage} 
        onChange={(e) => onLanguageChange(e.target.value)}
        className="language-dropdown"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
