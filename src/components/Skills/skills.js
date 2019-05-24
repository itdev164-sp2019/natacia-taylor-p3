import React, { Component } from 'react'
import styled from 'styled-components'
import { Code } from 'styled-icons/typicons/Code'
import { Mobile } from 'styled-icons/boxicons-solid/Mobile'
import { Lock } from 'styled-icons/material/Lock'

const LockIcon = styled(Lock)`
color: white;
`
const CodeIcon = styled(Code)`
color: white;
`
const MobileIcon = styled(Mobile)`
color: white;
`

export default class Skills extends Component {
    render() {
      return (
       <React.Fragment>
        <section id="skills">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Skills</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-square-o fa-stack-2x" />
                  <CodeIcon size="60"/>
                </span>
                <h4 className="service-heading">Software Development</h4>
                <p className="text-muted">C#, Java, HTML, CSS</p>
                <div className="w3-light-grey">
                  <div className="w3-container w3-deep-orange w3-center" style={{width: '75%'}}>75%</div>
                </div><br />
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-square-o fa-stack-2x" />
                  <MobileIcon size="60"/>
                </span>
                <h4 className="service-heading">Mobile App Development</h4>
                <p className="text-muted">iOS, Android</p>
                <div className="w3-light-grey">
                  <div className="w3-container w3-deep-orange w3-center" style={{width: '10%'}}>10%</div>
                </div><br />
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-square-o fa-stack-2x" />
                  <LockIcon size="60"/>
                </span>
                <h4 className="service-heading">Web Application Security</h4>
                <p className="text-muted">Client and Server</p>
                <div className="w3-light-grey">
                  <div className="w3-container w3-deep-orange w3-center" style={{width: '15%'}}>15%</div>
                </div><br />
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
      );
    }
  }