import React, {Component } from 'react'


export default class Header extends Component {
    render() {
      return (
       <React.Fragment>
        <header className="masthead">   
          <div className="videoContainer">
            <video autoPlay="true" preload="auto" muted>
              <source src="coast/MP4/background.mp4" type="video/mp4" />
              <source src="coast/MP4/background.webm" type="video/webm" />
              Video not supported.
            </video>
            <div className="intro-text">
              <div className="intro-lead-in hidden">Hello, I'm</div>
              <div className="intro-heading text-uppercase">Natacia</div>
              <div className="hidden2">
                <h4 className="adjust">Web, Software, Mobile App Student Developer</h4>
              </div>
            </div>
            </div>
        </header>
        </React.Fragment>
      );
    }
  }