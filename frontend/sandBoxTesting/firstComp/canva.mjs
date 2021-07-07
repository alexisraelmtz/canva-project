import React, { useRef, useEffect, useState } from "react";
import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


function MyCanva() {
     const canvasRef = useRef(null)
     const contextRef = useRef(null)
     const [isDrawing, setIsDrawing] = useState(false)

     useEffect(() => {
          const canvas = canvasRef.current;
          canvas.width = window.innerWidth * 2;
          canvas.height = window.innerHeight * 2;
          canvas.style.height = `${window.innerHeight}px`;
          canvas.style.width = `${window.innerWidth}px`;

          const context = canvas.getContext("2d");
          context.scale(2, 2);
          context.lineCap = "round";
          context.strokeStyle = "black";
          context.lineWidth = 5;
          contextRef.current = context;
     }, []);

     const startDrawing = (nativeEvent) => {
          const { offsetX, offsetY } = nativeEvent;
          contextRef.current.beginPath();
          contextRef.current.moveTo(offsetX, offsetY);
          setIsDrawing(true);
     }


     const stopDrawing = () => {
          contextRef.current.closePath();
          setIsDrawing(false);
     }


     const draw = ({ nativeEvent }) => {
          if (!isDrawing) {
               return
          };
          const { offsetX, offsetY } = nativeEvent;
          contextRef.current.lineTo(offsetX, offsetY);
          contextRef.current.stroke();
     }


     return (
          <canvas
               height="300px"
               onMouseDown={startDrawing}
               onMouseUp={stopDrawing}
               onMouseMove={draw}
               ref={canvasRef}
          />
     );
}


export default MyCanva;

//                          index() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <MyCanva></MyCanva>
//     </div>
//   )
// }




// function draw() {
//      var canvas = document.getElementById('canvas');
//      if (canvas.getContext) {
//           var ctx = canvas.getContext('2d');

//           ctx.fillStyle = 'rgb(235,235,235)';
//           ctx.fillRect(0, 0, 400, 400, 0.65);

//           // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//           // ctx.fillRect(30, 30, 50, 50);

//           // ctx = canvas.getContext('2d');

//           // ctx.fillStyle = 'rgb(200, 0, 0)';
//           // ctx.fillRect(10, 10, 150, 100)
//      }
// }