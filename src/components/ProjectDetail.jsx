import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./ProjectDetail.css";

const projects = [
  {
    id: "1",
    title: "Portfolio Website",
    date: "January 2025",
    image: "/images/HomePage.png",
    details: (
      <>
        <p>
          I created this portfolio website to showcase my projects and skills. It serves as a platform for potential employers and collaborators to learn more about my work and interests in technology and design.
        </p>
        <p>
          The website is built using React, CSS, and HTML, ensuring a responsive and user-friendly experience. I focused on creating a clean and modern design that highlights my projects effectively.
          
        </p>
        <p>
          You can explore the various sections of the site, including my projects, about me, and contact information. I plan to continuously update it with new projects and experiences as I grow in my career.
        </p>
        <p>
          Here is my figma design for the website: <img src="/images/amanihas-portfolio.png" alt="Girls Who Budget Design" className="project-image" />
        </p>
      </>
    )
  },
  {
    id: "2",
    title: "Girls Who Budget",
    date: "Fall, 2024",
    image: "/images/Girls_Who_Budget.webp",
    details: (
      <>
        <p>
          In Fall 2024, I began working on Girls Who Budget with a group of members from my Girls Who Code club that I'm a part of.
        </p>
        <p>
          Our website is a budgeting tool that allows users to input their income and expenses, and then provides them with a visual representation of their spending habits. The goal of the project is to help users better understand their financial situation and make informed decisions about their spending.
        </p>
        <p>
          We worked with figma to create a prototype of our design, react to create the front-end, and php to create the back-end. We also used MySQL to store user data.
        </p>
        <p>
          I was responsible for creating the front-end of the website. I used React to create the user interface and ensure that the website was responsive and easy to use. I also worked on the design of the website, making sure that it was visually appealing and easy to navigate.
        </p>
        <p>
          Here is my figma design for the website: <img src="/images/girlsWhoBudget.png" alt="Girls Who Budget Design" className="project-image" />
        </p>
        <p>
          We are currently working on connecting the APIs so that user data can be stored and accessed. We are also working on adding additional features, such as the ability to set financial goals and track progress over time. I am currently working on bringing the front-end to life!
        </p>
      </>
    )
  },
  {
    id: "5",
    title: "AmplifyHER",
    date: "April, 2024",
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
    id: "4",
    title: "Fireboy and Watergirl",
    date: "Spring, 2024",
    image: "/images/FBaWG-pic.jpeg",
    details: (
      <>
        <p>
        In the club I’m a part of, Girls Who Code, I worked together with a team of girls in order to create our own virsion of the popular game, Water Boy and Fire Girl.
        </p>
        <p>
        We utilized HTML to ensure seamless display on browsers, JavaScript for the game’s core code and functionalities, and Tiled for crafting and designing the levels.
        </p>
        <p>
        We met up once a week during the Spring 2024 semester and worjed together to create the game. Each member designed one of the level for the game using Tiled, an open source level editor. The level picured above is the one I created.
        </p>
        <p>
        Throughout the project, we encountered challenges such as properly scaling the game characters to match the dimensions of each level and learning new software, as we were relatively inexperienced in game design. Despite these obstacles, we successfully completed the project and presented our work to other groups, demonstrating the results of our dedication and teamwork. 
        </p>
      </>
    )
  },
  {
    id: "3",
    title: "Knights' Wildlife Tracker",
    date: "October, 2024",
    image: "/images/wildlife-tracker.png",
    details: (
      <>
        <p>
          In October, I participated in UCF’s Knight Hacks VII. I worked with a partner to create a website, Knights’ Wildlife Tracker, that allows users to log wildlife sightings in real-time, upload images, and contribute to an interactive map. The app makes it easy for users to share their experiences and discover wildlife activity in the UCF area.
        </p>
        <p>
          As wildlife lovers, we wanted to build a fun platform where people can easily share their wildlife sightings and connect with fellow nature enthusiasts. Our goal is to make it simple for everyone to enjoy and appreciate the outdoors while sharing those exciting moments with a community that cares about wildlife.
        </p>
        <p>We developed Knights’ Wildlife Tracker using:</p>
        <ul>
          <li>React for a responsive and user-friendly interface.</li>
          <li>Node.js/Express for a robust backend capable of handling user data and requests.</li>
          <li>Google Maps API for geolocation features that visualize sightings.</li>
          <li>MongoDB for seamless image uploads and management.</li>
        </ul>
        <p>During development, we faced multiple challenges:</p>
        <ul>
          <li>
            Ensuring that each uploaded image accurately pins to the corresponding location on the map required a moderate amount of research and testing.
          </li>
          <li>
            We initially aimed to incorporate visual recognition technology to help identify animals in user-uploaded photos. This proved to be a greater challenge than we anticipated, so we chose to redirect our efforts toward other features that would provide more immediate value to our users.
          </li>
        </ul>
        <p>
          In the end, we successfully created a functioning prototype that features a sleek user interface and effectively integrates the Google Maps API for real-time geolocation of wildlife sightings. We’re proud of how these elements come together to deliver a smooth and intuitive experience for users interested in tracking wildlife.
        </p>
        <p>
          We learned how crucial it is to stay flexible during the development process and to adapt our plans based on what works best for the project. We also gained valuable experience in integrating databases and tackling the technical challenges associated with geolocation features.
        </p>
        <p>
          Looking ahead, we plan to enhance the application by integrating machine learning algorithms for species identification based on user-uploaded images. We also aim to add community engagement features to foster interaction among users.
        </p>
        <p>
        Check out our project on{' '}
        <a href="https://devpost.com/software/knights-wildlife-tracker" target="_blank" rel="noopener noreferrer">
          Devpost
        </a>
          .
        </p>
      </>
    ),
  },
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