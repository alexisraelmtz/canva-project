import React, { useRef, useEffect, useState } from "react";
import styles from '../styles/canvaStyles.module.scss';


function MyCanva() {
     const canvasRef = useRef(null)
     const contextRef = useRef(null)
     const [isDrawing, setIsDrawing] = useState(false)

     useEffect(() => {
          const canvas = canvasRef.current;
          canvas.width = window.innerWidth - 400;
          canvas.height = 500;

          // canvas.width = window.innerWidth * 1;
          // canvas.height = window.innerHeight * 1;
          // // Ratio 2:1
          // canvas.style.height = `${window.innerHeight * 0.5}px`;
          // canvas.style.width = `${window.innerWidth * 0.5}px`;

          const context = canvas.getContext("2d");
          defaultColor = "white";
          context.fillStyle = defaultColor;
          context.fillRect(0, 0, canvas.width, canvas.height);
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
               className={styles.canvas}
               onMouseDown={startDrawing}
               onMouseUp={stopDrawing}
               onMouseMove={draw}
               ref={canvasRef}
          />
     );
}


// export default MyCanva


//////////////////////////////////////////////////////////////////



const clearDraw = () => {
     context.fillStyle = defaultColor;
     context.clearRect(0, 0, canvas.width, canvas.height);
     context.fillRect(0, 0, canvas.width, canvas.height);
     contextRef.current = context;

     restoreDraw = [];
     position = -1;
}


const undoLast = () => {
     if (position <= 0) {
          clearDraw;
     } else {
          position -= 1;
          restoreDraw.pop();
          contextRef.current.putImageData(restoreDraw[position], 0, 0);
     }
}


const saveDraw = () => {
     contextRef.current.putImageData(restoreDraw);
}