import React from "react";
import Header from "../components/Header";
import "./About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* Reusable Header */}
      <Header />
      
      {/* About Content */}
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        {/* Author Image */}
        <img
          src="/images/author.jpg"  // Replace with your actual image path
          alt="Amani Hassan"
          className="about-image"
        />

        {/* Intro Text */}
        <p className="about-intro">Hi! My name is Amani Hassan</p>

        {/* Detailed Bio */}
        <p className="about-description">
          I’m a senior at the University of Central Florida pursuing a B.S. in Human Factors Psychology with a Minor in Computer Science & Information Technology. As an aspiring full-stack developer, I specialize in React, Java, and C to bring web applications to life.
        </p>
        <p className="about-description">
          My studies in computer science have equipped me with a strong foundation in programming, system design, and problem-solving, while my background in psychology provides insight into user behavior. This unique combination enables me to design accessible, intuitive, and visually engaging UI/UX experiences. Whether I’m building dynamic front-end interfaces or optimizing back-end systems, my goal is to create digital solutions that are both functional and user-centered.
        </p>

        {/* Social Links with Icons */}
        <div className="about-social">
          <a
            href="https://github.com/amanihas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/amanihas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:amanihas2021@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

