import React from 'react';
// renders the about section
function About() {
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">About Me</h3>
        </div>
      </div>
      <div className="w-100">
        <div className="bio-image"></div>
        <article className="pt-4 px-3 bio-text">
          <p className="py-2">
            Full Stack Developer with a background in Supply Chain Management.
  
          </p>
          <p className="py-2">
            I currently live in Nashville and am employed at Carvana, LLC.
          </p>
          
          <p className="py-2">
            Outside of work and coding, I enjoy spending time with my family, hiking,
            fishing, gaming, and watching sporting events.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
