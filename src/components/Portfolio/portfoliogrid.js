import React, { Component } from 'react'
import {Button } from 'rebass'
export default class Grid extends Component {
    render() {
      return (
       
      <div>
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Farmer Game: Chicken, Fox and Grain</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/farmer.png" alt />
                    <p>Instructions: A farmer must take his fox, chicken and sack of grain across the wide river. The trouble is, his boat is old and leaky, and he can only take one across with him at a time. If he leaves the fox with the chicken, the chicken will be eaten. If he leaves the chicken with the grain, the chicken will eat the grain.
                      Help the farmer get across the river with his animals and grain, by moving one item at a time (the farmer will automatically move).
                      See code on github<a className="w3-text-blue" href="https://github.com/tacintech"> here</a>.</p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: School Project</li>
                      <li>Category: Game</li>
                    </ul>
                    
                    <Button variant='primary' data-dismiss="modal" >
                      <i className="fa fa-times" />
                      Close Project</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Tic Tac Toe</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/tic-tac-toe.png" alt />
                    <p>Instructions: 
                      1. The game is played on a grid that's 3 squares by 3 squares.
                      2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.
                      3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
                      4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
                      See code on github<a className="w3-text-blue" href="https://github.com/tacintech"> here</a></p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: School Project</li>
                      <li>Category: Game</li>
                    </ul>
                    <Button variant='primary' data-dismiss="modal" >
                      <i className="fa fa-times" />
                      Close Project</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 3 */}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Hangman</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/hangman.jpg" alt />
                    <p>Instructions:  Choose a random word and display it as blanks (short lines) for each letter of each word. Separate words with either a slash, a fairly wide gap, or place words on separate lines. Then the player will guess a letter. If that letter is in the word(s) then write the letter in everywhere it would appear, an cross out that letter in the alphabet. If the letter isn't in the word then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg). The player will continue guessing letters until they can either solve the word (or phrase) or all six body parts are on the gallows.
                      The player loses if the full body is hanging from the gallows. The player wins if they guess the word before the person is hung.
                      See code on github<a className="w3-text-blue" href="https://github.com/tacintech"> here</a></p>
                    <ul className="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: School Project</li>
                      <li>Category: Game</li>
                    </ul>
                    <Button variant='primary' data-dismiss="modal" >
                      <i className="fa fa-times" />
                      Close Project</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 4 */}
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Black History Website</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/blackhistory.png" alt />
                    <p>Instructions: Create a responsive website that uses a mobile first approach and account for atleast three breakpoints. See code on github<a className="w3-text-blue" href="https://github.com/tacintech"> here</a></p>
                    <ul className="list-inline">
                      <li>Date: March 2018</li>
                      <li>Client: School Project</li>
                      <li>Category: Responsive Web Design</li>
                    </ul>
                    <Button variant='primary' data-dismiss="modal" >
                      <i className="fa fa-times" />
                      Close Project</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 5 */}
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Custom Car App</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/car.png" alt />
                    <p>Instructions: Create a Graphical User Interface application that allows a user to customize a car before purchase. The order shoould be saved to a database so the user can access it after the app is reopened. See code on github<a className="w3-text-blue" href="https://github.com/tacintech"> here</a></p>
                    <ul className="list-inline">
                      <li>Date: April 2018</li>
                      <li>Client: School Project</li>
                      <li>Category: Java GUI</li>
                    </ul>
                    <Button variant='primary' data-dismiss="modal" >
                      <i className="fa fa-times" />
                      Close Project</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 6 */}
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Grocery List App</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="img/portfolio/shopping.png" alt />
                    <p>Instructions: Utilize the concept of file input/output to create a console application that accepts and writes user input to a file. The user should be able to access the list when the application is reopened. 
                      See code on github<a className="w3-text-blue" href="https://github.com/tacintech"> here</a></p>
                    <ul className="list-inline">
                      <li>Date: April 2018</li>
                      <li>Client: Window</li>
                      <li>Category: Java Console Application</li>
                    </ul>
                    <Button variant='primary' data-dismiss="modal" >
                      <i className="fa fa-times" />
                      Close Project</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
    }
}