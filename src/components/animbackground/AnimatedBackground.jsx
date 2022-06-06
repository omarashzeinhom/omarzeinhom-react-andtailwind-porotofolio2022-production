import React from "react";
import "./animatedbackground.css";


/***
 * 
 * Do it as a game that pops leaves
 * Responsiveness and uniqueness
 */


const AnimatedBackground = () => {
  return (
    <div>
      <ul className="leaves">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default AnimatedBackground;

/**
 * document.querySelector( "#retrobg-sun" ).onclick = () => {
document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
}; 

*/
