import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

class App extends Component {

  componentDidMount () {
    let coords = [ [150,80], [140,70], [145,80], [160,90], [165,85], [170,50], [140,80], [140,60], [130,50], [120,50], [100,70], [170,70], [200,70] ];

    let canvas = document.getElementById("canvas-wrapper");
    let ctx = canvas.getContext("2d");
    
    function drawCircle () {
      
    for ( let i = 0; i < coords.length; i++){ 

      let radius = Math.floor((Math.random() * 15)+10);

      ctx.beginPath();
      ctx.arc(coords[i][0], coords[i][1], radius, 0, 2*Math.PI, true);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();

      setInterval(function drawCircle() {
        let num = (Math.random()*5);
        ctx.scale(num,num);
      }, 500);
    }
    
  }
  
  drawCircle();
    
  }
  render() {
    return (
      <div>
        <NavBar className="navbar" />
        <canvas ref="canvas" id="canvas-wrapper">
                </canvas>
      {/* <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
