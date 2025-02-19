import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "AmplifyHER",
    previewImage: "/images/AmplifyHER-pic.jpg",
  },
  {
    id: 2,
    title: "Fireboy and Watergirl",
    previewImage: "/images/FBaWG-pic.jpeg",
  },
  {
    id: 3,
    title: "Knights' Wildlife Tracker",
    previewImage: "/images/project3-preview.jpg",
  },
  // Add more projects as needed
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
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;