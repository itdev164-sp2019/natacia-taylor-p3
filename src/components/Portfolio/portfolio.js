import React, { Component } from 'react'


export default class Portfolio extends Component {
    render() {
      return (
       <React.Fragment>
        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/farmer_tn.jpg" alt="Farmer in a boat" />
                </a>
                <div className="portfolio-caption fix">
                  <h4>Farmer Game</h4>
                  <p className="text-muted">GUI Application coded with C#</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/tic-tac-toe_tn.jpg" alt="Tic tac toe" />
                </a>
                <div className="portfolio-caption fix">
                  <h4>Tic Tac Toe</h4>
                  <p className="text-muted">Console Application coded with C#</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/hangman_tn.jpg" alt="hangman game" />
                </a>
                <div className="portfolio-caption fix">
                  <h4>Hangman</h4>
                  <p className="text-muted">Console Application coded with C#</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/blackhistory_tn.jpg" alt="black history" />
                </a>
                <div className="portfolio-caption fix">
                  <h4>Black History</h4>
                  <p className="text-muted">Responsive Website</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/car_tn.jpg" alt="car" />
                </a>
                <div className="portfolio-caption fix">
                  <h4>Car App</h4>
                  <p className="text-muted">GUI Application coded with Java</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/shopping_tn.jpg" alt />
                </a>
                <div className="portfolio-caption fix">
                  <h4>Grocery List</h4>
                  <p className="text-muted">Console Application coded with Java</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
      );
    }
  }