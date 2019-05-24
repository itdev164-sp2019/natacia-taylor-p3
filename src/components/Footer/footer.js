import React, { Component } from 'react'
import styled from 'styled-components'
import { SocialGithubCircular } from 'styled-icons/typicons/SocialGithubCircular'
import { SocialTwitterCircular } from 'styled-icons/typicons/SocialTwitterCircular'
import { SocialLinkedinCircular } from 'styled-icons/typicons/SocialLinkedinCircular'

const Github = styled(SocialGithubCircular)`
  color: white;
`
const Twitter = styled(SocialTwitterCircular)`
color: white;
`
const Linkedin = styled(SocialLinkedinCircular)`
color: white;
`

export default class Footer extends Component {
    render() {
      return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ul className="list-inline ">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/tacintech">
                      <i><Twitter size="48"/></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/tacintech">
                      <i><Github size="48"/> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/tacintech/">
                      <i> <Linkedin size="48"/></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        </React.Fragment>
      );
    }
  }