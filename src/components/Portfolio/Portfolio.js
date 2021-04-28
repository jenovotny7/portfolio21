import React from 'react';
import Container from 'react-bootstrap/Container';
import Project from '../Project/Project'
// renders portfolio
function Portfolio() {
  // an array of project info that will be mapped and passed to project
    const projects = [
        {
            title: "Street Live",
            highlights: "Basketball pickup app",
            pLink: "https://jenovotny7.github.io/Street-Live-Portolio/",
            rLink: "https://github.com/jenovotny7/Street-Live-Portolio"
        },
        {
            title: "Weather App",
            
            highlights: "Weather App",
            pLink: "https://jenovotny7.github.io/WeatherApp-Portfolio/",
            rLink: "https://github.com/jenovotny7/WeatherApp-Portfolio"
        },
        {
            title: "Quiz-Api",
            highlights: "Quiz App",
            pLink: "https://jenovotny7.github.io/Quiz-API-Portfolio/",
            rLink: "https://github.com/jenovotny7/Quiz-API-Portfolio"
        },
        {
            title: "Express Notes",
            details: "A full-stack CMS app for posting articles and opinions about tech relatated news. Utilizes MVC structure, node, Express, MySQL and Sequelize. Deployed to Heroku.",
            highlights: "Express MySQL Sequelize",
            pLink: "",
            rLink: ""
        },
        {
            title: "GolfHub",
            details: "Employee Manager is a command line app that interacts with a MySQL database to so that you can easily keep track your company's departments, roles, and employees. Utilizes node, MySQL, inquirer.js.",
            highlights: "MySQL Node Inquirer",
            pLink: "",
            rLink: ""
        },
        {
          title: "Google Books Search",
          details: "A React app with a GraphQL back-end. I converted this from REST to GraphQL on the back-end and front-end. Utilizes apollo-server-express on the back-end and apollo-boost on the front-end. Also utilizes JWT for user authorization.",
          highlights: "React GraphQL Apollo-GraphQL",
          pLink: "",
          rLink: ""
        },
    ]
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">My Projects</h3>
        </div>
      </div>
        
        <Container className="d-flex flex-wrap mt-5">
        {projects.map((project, i) => ( 
          <Project 
            project={project} 
            i={i}
            key={i}
            />
        ))}
            
        </Container>
    </section>
  );
}

export default Portfolio;