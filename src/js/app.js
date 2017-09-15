// JS Goes here - ES6 supported
import Velocity from 'velocity-animate';


var george = document.getElementById('george');
var lighthouse = document.getElementsByClassName('lighthouse-draw');

/* First animation */
Velocity(lighthouse, { strokeDashoffset: 0 }, {duration: 3000});
Velocity(lighthouse, { fill: "#145693" }, {delay: 500, queue: false});
Velocity(george, "fadeIn", { delay: 1000, duration: 1000});
Velocity(george, { translateY: -75 }, { delay: 1000, duration: 1000,  queue: false });
Velocity(george, { rotateZ: -5 }, { delay: 1500, duration: 2000, queue: false });