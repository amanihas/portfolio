import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./ProjectDetail.css"; // Import the CSS file

const projects = [
  {
    id: "1",
    title: "AmplifyHER",
    date: "February 2025",
    image: "/images/AmplifyHER-pic.jpg",
    details: (
      <>
        <p>
          I created AmplifyHER in UF’s 2024 WingHacks along with my partner Karlina Maya.
        </p>
        <p>
          Our website prompts the user to pick an option from a list of preselected genres to give them a new playlist. It filters through a gender database that provides us with information about artists’ gender identity and made it so that only female, non-binary, and GNC individuals would be added to the generated playlists.
        </p>
        <p>
          We utilized a combination of JavaScript, HTML/CSS, and Python in order to create our website. First we used JavaScript and HTML/CSS to create the foundation of our website and to establish a uniform theme throughout our project. We then utilized Python along with Spotify’s developer API and Chartmetric’s Pronoun and Gender dataset to generate a playlist comprising songs by female, non-binary, and GNC individuals.
        </p>
      </>
    )
  },
  {
    id: "2",
    title: "Fireboy and Watergirl",
    date: "March 2025",
    image: "/images/FBaWG-pic.jpeg",
    details: "This is a description of Project Two. It details the work done and technologies used."
  },
  {
    id: "3",
    title: "Project Two",
    date: "March 2025",
    image: "/images/project2.jpg",
    details: "This is a description of Project Two. It details the work done and technologies used."
  }
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail-page">
      <Header />
      <div className="project-detail">
        <div className="project-header">
          <div className="title-container">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-date">{project.date}</p>
          </div>
        </div>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-description">{project.details}</div>
      </div>
    </div>
  );
}

export default ProjectDetail;