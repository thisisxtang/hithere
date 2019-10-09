import React, { Component } from "react";
// import Time from "./Time";

class Info extends Component {
  state = {};
  render() {
    return (
      <div className="info">
        <div className="info_intro">
          <div className="info_intro_block block_text">
            <p>
              <small>
                <strong>About Me</strong>
                <p style={{ marginTop: 10 }}>
                  <strong>Hi, </strong>
                  My mane is Xian Tang. I am a designer who codes.
                </p>
                {/* <p>
                  I went to school for computer science and was a very amateur
                  designer before I came to Edinburgh. I was lucky to have the
                  chance to explore what I am truly passionate about.
                </p> */}
                <p>
                  I enjoy coding and love to experiment with different
                  technologies and design skills. I learned most of the things
                  from the talented people around me and by working hard on my
                  projects. Trust me, my portfolio is growing and I am still
                  learning.
                </p>
                <p>
                  I maybe a little shy and a little awkward but I am definitely
                  an interesting person to work with. I use emoji a lot{" "}
                  <span role="img" aria-label="image">
                    🤡
                  </span>
                  and my pasta is phenomenal
                  <span role="img" aria-label="image">
                    🖖🏻
                  </span>
                  . So please contact me if you are looking for collaboration,
                  or it's cool to just say hi too.
                </p>
              </small>
            </p>
          </div>
          {/* <div className="info_intro_block block_pic"></div>
          <div className="info_intro_block block_news"> */}
          {/* <Time></Time> */}
          {/* </div> */}
        </div>

        <div className="info_cv">
          <div className="info_cv_column column_skills">
            <small>
              <strong>Skill</strong>
              <p style={{ marginTop: 10 }}>
                Data Visualization Design
                <br />
                IoT Design
                <br />
                Web Design
                <br /> User Experience Design
                <br /> Critical Thinking
              </p>
              <p>
                Front-End Development
                <br /> Arduino Engineering
              </p>
              <p>Tools: Adobe CC, Sketch, Axure</p>
              <p>Programming: React, Javascript, HTML, CSS</p>
            </small>
          </div>
          <div className="info_cv_column column_experience">
            <small>
              <strong>Experience</strong>
              <p style={{ marginTop: 10 }}>
                02/2019 - 07/2019
                <br /> Product Designer
                <br /> Baidu
                <br /> Beijing China
              </p>
              <p>
                07/2018 - 01/2019
                <br /> Research Assistant
                <br /> Design Informatics Lab
                <br /> University of Edinburgh
                <br /> Edinburgh UK
              </p>
            </small>
          </div>
          <div className="info_cv_column column_education">
            <small>
              <strong>Education</strong>
              <p style={{ marginTop: 10 }}>
                2016 - 2017
                <br /> Design Informatics
                <br /> MS.c | Distinction
                <br /> University of Edinburgh
                {/* <br /> Edinburgh UK */}
              </p>
              <p>
                2015 - 2018
                <br /> Computer Science
                <br /> MS.c | GPA 3.4
                <br /> Central South University
                <br /> China
              </p>
              <p>
                2010 - 2014
                <br /> Software Engineering
                <br /> B.S | GPA 84
                <br /> Central South University
                {/* <br /> China */}
              </p>
            </small>
          </div>
          <div className="info_cv_column column_award">
            <small>
              <strong>Award</strong>
              <p style={{ marginTop: 10 }}>
                2017
                <br />
                BBC D&AD <br />
                Yellow Pencil
              </p>
              <strong>Contact</strong>
              <p style={{ marginTop: 10 }}>
                Phone: <br />
                44 07529834153
                <br />
                Mail: <br />
                xiantang25@gmail.com
              </p>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
