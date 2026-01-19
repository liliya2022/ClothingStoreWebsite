import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <section className="about-section">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            Welcome to our website. We are dedicated to creating beautiful,
            minimalist digital experiences that focus on clean design and
            intuitive user interfaces.
          </p>
        </section>

        <section className="about-section">
          <h3 className="about-subtitle">Our Mission</h3>
          <p className="about-text">
            Our mission is to provide users with elegant, functional, and
            responsive web experiences. We believe in the power of simplicity
            and the importance of attention to detail.
          </p>
        </section>

        <section className="about-section">
          <h3 className="about-subtitle">What We Offer</h3>
          <ul className="about-list">
            <li>Clean and modern design</li>
            <li>Responsive layouts for all devices</li>
            <li>Intuitive user experience</li>
            <li>High-quality visual content</li>
            <li>Fast and reliable performance</li>
          </ul>
        </section>

        <section className="about-section">
          <h3 className="about-subtitle">Contact</h3>
          <p className="about-text">
            For inquiries, please reach out to us through our contact form or
            email. We'd love to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
