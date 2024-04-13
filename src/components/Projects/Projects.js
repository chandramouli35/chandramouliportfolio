import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"; 

import bookHub from '../../Assets/Projects/bookHub.png'
import FramerMotions from '../../Assets/Projects/FramerMotions.png'
import travel from '../../Assets/Projects/travel.png'
import jokes from '../../Assets/Projects/jokes.png'
import dashBoard from '../../Assets/Projects/dashBoard.png'
import ecommerce from '../../Assets/Projects/ecommerce.png'  
import socialMediaApp from '../../Assets/Projects/socialMediaApp.png'  
import realtodolist from '../../Assets/Projects/realtodolist.png'  
import smallportfolio from '../../Assets/Projects/smallportfolio.png'
import cashwithdrawl from "../../Assets/Projects/cashwithdrawl.png";
import googlesearchsuggestions from '../../Assets/Projects/googlesearchsuggestions.png'
import character from '../../Assets/Projects/character.ai.png'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookHub}
              isBlog={false}
              title="Book Hub"
              description="This is a Good Reads clone websites, users can see lot of books, user can mark the book as favourite, change the theme, login and logout credientials. (userName: rahul, password: rahul@2021)"
              ghLink="https://github.com/chandramouli35/Book-Hub"
              demoLink="https://bookhubcm.ccbp.tech/"
            />
            </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FramerMotions}
              isBlog={false}
              title="Framer Motions"
              description="This is a simple project. Showcasing different framer motions"
              ghLink="https://github.com/chandramouli35/Spur-fit-assignmentcm"
              demoLink="https://spurfitassignment.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jokes}
              isBlog={false}
              title="Random Jokes Generator"
              description="This is a random jokes generator using API"
              ghLink="https://github.com/chandramouli35/MobileFirst-Applications-Assignment"
              demoLink="https://jokesmobilefirst.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel"
              description="This is showing a travel routes"
              ghLink="https://github.com/chandramouli35/media-Nv-frntEnd"
              demoLink="https://media-nv-tcm.netlify.app/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashBoard}
              isBlog={false}
              title="DashBoard"
              description="This is a dashboard show casing the items."
              ghLink="https://github.com/chandramouli35/adaptnxt_dashboard_assignment_"
              demoLink="https://adaptnxtdashboardassgnmt.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="This is an ecommerce website. This is a showcasing for the category of the item, date of sold."
              ghLink="https://github.com/chandramouli35/RoxilerEcomFrontend-main"
              demoLink="https://roxilertcm.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMediaApp}
              isBlog={false}
              title="Social Media App"
              description="This is real time social media application. Where users can upload the post(image/ video). Create an account by providing mail ."
              ghLink="https://github.com/chandramouli35/Social-Media-Application"
              demoLink="https://mern-stack-social-application-fully.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realtodolist}
              isBlog={false}
              title="Todo List"
              description="This is a real time todo list app where user can add the task, mark the task as completed and delete the task as well"
              ghLink="https://github.com/chandramouli35/Economize_assignment_frontend-main"
              demoLink="https://659d32c74d9da19e40b2bce2--economize-assignment-todo.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smallportfolio}
              isBlog={false}
              title="Small Portfolio"
              description="Simple Portfolio show casing projects , about , contact"
              ghLink="https://github.com/chandramouli35/Fincity-project-main"
              demoLink="https://6597a97148019a8ddd72ccb7--fincity-project-main.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googlesearchsuggestions}
              isBlog={false}
              title="Google Search Suggestions"
              description="It shows the suggestions when you are searching"
              ghLink="https://github.com/chandramouli35/googleSearchSuggestions"
               demoLink="https://suggestionmouli.ccbp.tech/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cashwithdrawl}
              isBlog={false}
              title="Cash Withdrawl"
              description="User can see how much money left."
              ghLink="https://github.com/chandramouli35/cashWithdrawl"
               demoLink="https://moulicash.ccbp.tech/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={character}
              isBlog={false}
              title="Character.ai"
              description="Here User can create an account by and chat with ai"
              ghLink="https://github.com/chandramouli35/embed.ai-master"
               demoLink="https://create-ai-embed.netlify.app/"      
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
