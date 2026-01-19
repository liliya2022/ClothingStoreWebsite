import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
    notifications: true,
    darkMode: false,
    language: 'en',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings save logic here
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-section">
          <h2 className="settings-section-title">Account</h2>
          <div className="settings-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={settings.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="settings-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="settings-section">
          <h2 className="settings-section-title">Preferences</h2>
          <div className="settings-field checkbox-field">
            <label htmlFor="notifications" className="checkbox-label">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              <span>Enable notifications</span>
            </label>
          </div>
          <div className="settings-field checkbox-field">
            <label htmlFor="darkMode" className="checkbox-label">
              <input
                type="checkbox"
                id="darkMode"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
              <span>Dark mode</span>
            </label>
          </div>
          <div className="settings-field">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleChange}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>

        <button type="submit" className="settings-submit-button">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;
