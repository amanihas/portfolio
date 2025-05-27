import React from "react";
import Header from "../components/Header";
import "./About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
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
        <p className="about-intro">Hi! My name is Amani Hassan :)</p>

        {/* Detailed Bio */}
        <p className="about-description">
          I recently graduated from the University of Central Florida with a B.S. in Human Factors Psychology and minors in Computer Science and Information Technology. I began my college journey focused on psychology, but halfway through, I discovered a passion for technology and shifted my focus to Computer Science. This path has allowed me to blend a deep understanding of human behavior with the creative challenge of building engaging digital experiences.
        </p>
        <p className="about-description">
          I’m an aspiring UX/UI designer. My background in psychology provides valuable insights into user behavior, while my studies in computer science have given me a strong foundation in programming, system design, and problem-solving. I work with technologies like React, Java, and C to bring dynamic web applications to life.
        </p>
        <p className="about-description">
          While I’m at the start of my professional journey, my passion, dedication, and eagerness to learn drive me to grow continuously. I’m excited to create digital solutions that are both functional and user-centered, always striving to make technology accessible and enjoyable for everyone.
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

