import React from 'react';

function About() {
  return (
    <section>
      <h2>About</h2>
      <div className="about-container">
        <div className="about-img">
          <img src={require('../assets/images/Avatar.jpg')} alt="" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm K. Karr, a copy editor turned frontend web developer.
          </p>
          <p>
            I got my start tinkering with HTML for Expage, GeoCities, and
            LiveJournal in high school.
          </p>
          <p>
            After collecting a few degrees, living abroad for two years, and
            cultivating an eye for detail working as a copy editor for a decade,
            I returned to web development out of a strong desire to learn more
            about the technologies I use every day.
          </p>
          <p>
            I specialize in HTML, CSS, JavaScript, Node.js, Express.js, React,
            and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
