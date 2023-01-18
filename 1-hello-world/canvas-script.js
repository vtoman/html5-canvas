/** @type {HTMLCanvasElement} */

var canvas = document.getElementById("hello-world-canvas");
var context = canvas.getContext("2d");

context.fillStyle = "blue";
context.fillRect(10, 40, 30, 70);

context.fillStyle = "yellow";
context.fillRect(50, 30, 60, 30);

