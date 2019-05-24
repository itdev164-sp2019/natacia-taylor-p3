
import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Grid from './components/Portfolio/portfoliogrid'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
 
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Grid />
        <Skills />
        <Contact />
        <Footer />
      </div>
      </ThemeProvider>
    );
  }
}
export default App;
