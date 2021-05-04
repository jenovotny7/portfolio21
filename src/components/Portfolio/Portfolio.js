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
            title: "Note-Taker Express",
            details: "Note Taker App",
            highlights: "Express",
            pLink: "https://boiling-tor-92880.herokuapp.com/notes",
            rLink: "https://github.com/jenovotny7/Express-Notes-Portfolio"
        },
        {
            title: "Shopping Cart",
            details: "",
            highlights: "",
            pLink: "https://redux-shoppin.herokuapp.com/",
            rLink: "https://github.com/jenovotny7/Redux-Shopping"
        },
        {
          title: "Google-Book-App",
          details: "A React app with a GraphQL back-end. I converted this from REST to GraphQL on the back-end and front-end. Utilizes apollo-server-express on the back-end and apollo-boost on the front-end. Also utilizes JWT for user authorization.",
          highlights: "React GraphQL Apollo-GraphQL",
          pLink: "",
          rLink: "https://github.com/jenovotny7/Book-Search-App"
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