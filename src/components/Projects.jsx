import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    previewImage: "/images/HomePage.png",
  },
  {
    id: 2,
    title: "Girls Who Budget",
    previewImage: "/images/Girls_Who_Budget.webp",
  },
  {
    id: 3,
    title: "Knights' Wildlife Tracker",
    previewImage: "/images/Screenshot-green.png",
  },
  {
    id: 4,
    title: "Fireboy and Watergirl",
    previewImage: "/images/FBaWG-pic.jpeg",
  },
  {
    id: 5,
    title: "AmplifyHER",
    previewImage: "/images/amplifyher.png",
  }

];

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="project-box"
            >
              <img src={project.previewImage} alt={project.title} />
              <h2>{project.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;