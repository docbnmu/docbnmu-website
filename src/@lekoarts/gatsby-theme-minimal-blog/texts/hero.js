import React, { Component } from "react"
import "./hero.css";
import { Slide } from 'react-slideshow-image';

const slideImages = [
  './images/Chem.BNMU14.jpg.webp',
  './images/Chem.BNMU1.jpg.webp',
  './images/Chem.BNMU3.jpg.webp',
  './images/Chem.BNMU4.jpg.webp',
  './images/Chem.BNMU5.jpg.webp',
  './images/Chem.BNMU7.jpg.webp',
  './images/Chem.BNMU8.jpg.webp',
  './images/Chem.BNMU9.jpg.webp',
  './images/Chem.BNMU10.jpg.webp',
  './images/Chem.BNMU11.jpg.webp',
  './images/Chem.BNMU15.jpg.webp',
  './images/Chem.BNMU16.jpg.webp',
  './images/Chem.BNMU23.jpg.webp',
  './images/Chem.BNMU28.jpg.webp',
  './images/Chem.BNMU33.jpg.webp',
  './images/Chem.BNMU36.jpg.webp'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
class SlidePics extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[11]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[12]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[13]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[14]})`}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}
}
export default SlidePics