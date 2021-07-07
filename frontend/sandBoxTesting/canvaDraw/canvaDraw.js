const canvas = document.getElementById("canvas");

// canvas.width = window.innerWidth - 400;
// canvas.height = 500;

canvas.width = window.innerWidth * 1;
canvas.height = window.innerHeight * 1;
// Ratio 2:1
canvas.style.height = `${window.innerHeight * 0.5}px`;
canvas.style.width = `${window.innerWidth * 0.5}px`;

let context = canvas.getContext("2d")
context.scale(2, 2);
context.lineCap = "round";
context.strokeStyle = "black";
context.lineWidth = 5;

let defaultColor = "white";
context.fillStyle = defaultColor;
context.fillRect(0, 0, canvas.width, canvas.height);


let startDrawingColor = "black";
let startDrawingSize = "2";
let isDrawing = false;

let restoreDrawing = [];
let position = -1;


canvas.addEventListener("touchstart", activate, false);
canvas.addEventListener("touchmove", startDrawing, false);
canvas.addEventListener("mousedown", activate, false);
canvas.addEventListener("mousemove", startDrawing, false);

canvas.addEventListener("touchend", stopDrawing, false);
canvas.addEventListener("mouseup", stopDrawing, false);
canvas.addEventListener("mouseout", stopDrawing, false);


function colorChange(element) {
     startDrawingColor = element.style.background;
}


function activate(event) {
     isDrawing = true;
     context.beginPath();
     context.moveTo(event.clientX - canvas.offsetLeft,
          event.clientY - canvas.offsetTop);
     event.preventDefault();
}



function startDrawing(event) {
     if (isDrawing) {
          context.lineTo(event.clientX - canvas.offsetLeft,
               event.clientY - canvas.offsetTop);
          context.strokeStyle = startDrawingColor;
          context.lineWidth = startDrawingSize;
          context.lineCap = "round";
          context.lineJoin = "round";
          context.stroke();
     }
     event.preventDefault();
}



function stopDrawing(event) {
     if (isDrawing) {
          context.stroke();
          context.closePath();
          isDrawing = false;
     }
     event.preventDefault();

     if (event.type != "mouseout") {
          restoreDrawing.push(context.getImageData(0, 0, canvas.width, canvas.height));
          position += 1;
     }
     // console.log(restoreDrawing);
}


function clearDrawing() {
     context.fillStyle = defaultColor;
     context.clearRect(0, 0, canvas.width, canvas.height);
     context.fillRect(0, 0, canvas.width, canvas.height);

     restoreDrawing = [];
     position = -1;
}


function undoLast() {
     if (position <= 0) {
          clearDrawing();
     } else {
          position -= 1;
          restoreDrawing.pop();
          context.putImageData(restoreDrawing[position], 0, 0);
     }
}


const saveDrawing = () => {
     return console.log(restoreDrawing)
}

const exportDrawing = () => {
     let fullQuality = canvas.toDataURL('username-date-session', 1.0);
     return console.log(fullQuality)
}