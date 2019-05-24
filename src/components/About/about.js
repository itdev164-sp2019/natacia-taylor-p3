import React, { Component } from 'react'


export default class About extends Component {
    render() {
      return (
        <React.Fragment>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About Me</h2>
                <h3 className="section-subheading text-muted">Coder, Foodie, Wanna-be Reggae Singer</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <h3>2</h3>
                      <h3>0</h3>
                      <h3>0</h3>
                      <h3>9</h3>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="w3-text-deep-orange hidden">September 2009</h4>
                        <h4 className="subheading w3-text-deep-orange">The Introduction</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">My first exposure to programming was in high school where I delved into the good ole Pascal. It introduced me to problem solving outside of Math classes. </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h3>2</h3>
                      <h3>0</h3>
                      <h3>1</h3>
                      <h3>7</h3>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="second hidden">January 2017</h4>
                        <h4 className="subheading second">The Start</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">I enrolled in my first programming class. Did you notice that huge gap? Well, after high school, I went on to medical school. I missed being challenged so I decided to go back to my first love after I migrated from one country to another.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <h3>2</h3>
                      <h3>0</h3>
                      <h3>1</h3>
                      <h3>7</h3>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="w3-text-deep-orange hidden">December 2017</h4>
                        <h4 className="subheading w3-text-deep-orange">Year One</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">I completed my first year of college. Best decision ever! My favorite language, so far, is C#. And, I am more partial to software development.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h3>2</h3>
                      <h3>0</h3>
                      <h3>1</h3>
                      <h3>8</h3>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="subheading second" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="w3-text-deep-orange">Present</h4>
                        <p className="text-muted">I am enjoying debugging my way through my degree. I am now proficient in C#, Java, HTML, CSS and some JavaScript. I am also broadening my horizons to security and software testing.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h3>.</h3>
                      <h3>.</h3>
                      <h3>.</h3>    
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
      );
    }
  }