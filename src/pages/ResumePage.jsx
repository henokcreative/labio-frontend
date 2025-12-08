// src/pages/ResumePage.jsx
import React from "react";
import Hero from "../components/Hero";
import "./resume.css";



const resumePage = () => {


  return (
    <div id="cv" className="instaFade resume-page">
      <div className="mainDetails">
        <div className="resume-headshot">
          <img src="assets/team/henok.jpg" alt="Henok Karvonen" />
        </div>

        <div id="name">
          <h4>Henok Karvonen</h4>
          <h3>Multimedia Producer</h3>
        </div>

        <div id="contactDetails">
          <div className="contact-item">
            E-mail :{" "}
            <a href="mailto:henok.karvonen@gmail.com" target="_blank" rel="noopener noreferrer">
              henok.karvonen@gmail.com
            </a>
          </div>
          <div className="contact-item">
            Website :{" "}
            <a href="https://henokcreative.github.io/" target="_blank" rel="noopener noreferrer">
              henokcreative.github.io
            </a>
          </div>
          <div className="contact-item">Mobile : +358 45 6955689</div>
        </div>
        <div className="clear" />
      </div>

      <div id="mainArea">
        <section>
          <article>
            <div className="sectionTitle">
              <h1>About Me</h1>
            </div>

            <div className="sectionContent">
              <p>
              I am an experienced multimedia producer at the Turku Bioscience Centre, a leading core facility and research hub jointly hosted by the University of Turku and Åbo Akademi University. In my role, I oversee the production and dissemination of multimedia content to effectively communicate and support bioscience research and educational initiatives across both universities. I possess extensive experience in creating photographs, videos, illustrations, presentations, and both print and digital materials. Since joining the centre in March 2017, I have developed strong practical expertise in audiovisual media design, from conceptualization to execution, and I am highly proficient in the Adobe Creative Cloud suite.
              </p>
            </div>
          </article>
          <div className="clear" />
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h4>Multimedia producer, University of Turku, Finland</h4>
              <p className="subDetails">March 2017 - Present</p>
              <p>Managed the production and publication of multimedia materials: photos, videos, and print</p>
              <p>Mentored and trained interns in videography and photography</p>
              <p>
                Demonstrated leadership skills by guiding a small multimedia team consisting of full
                time employees and interns
              </p>
            </article>

            <article>
              <h4>Master’s thesis project researcher, University of Turku, Finland</h4>
              <p className="subDetails">September 2014 - January 2017</p>
              <p>
                Investigated role of nestin, a cytoskeletal protein, in skeletal muscle progenitor satellite
                cells
              </p>
            </article>

            <article>
              <h4>Primary school teacher, Addis Ababa, Ethiopia</h4>
              <p className="subDetails">September 2003 - June 2011</p>
              <p>Taught science, health and physical education in one public and three private schools</p>
            </article>
          </div>
          <div className="clear" />
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Education</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h4>University of Turku</h4>
              <p className="subDetails">September 2013 - July 2015</p>
              <p>Master of science in biomedical imaging, 3/5, cum laude approbatur</p>
            </article>

            <article>
              <h4>Addis Ababa University</h4>
              <p className="subDetails">September 2007 - July 2011</p>
              <p>Bachelor of education in biology, cumulative GPA 3.17/4.00, distinction</p>
            </article>

            <article>
              <h4>Kotebe Metropolitan University</h4>
              <p className="subDetails">September 2001 - August 2003</p>
              <p>Diploma of teaching in health and physical education, cumulative GPA 2.92/4.00</p>
            </article>
          </div>
          <div className="clear" />
        </section>
      </div>
    </div>
  );
};

export default resumePage;
