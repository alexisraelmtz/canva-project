import React, { useRef, useEffect, useState } from "react";
import styles from '../styles/canvaStyles.module.scss';


function MyCanva() {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 1;
    canvas.height = window.innerHeight * 1;
    // Ratio 2:1
    canvas.style.height = `${window.innerHeight * 0.5}px`;
    canvas.style.width = `${window.innerWidth * 0.5}px`;

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
      className={styles.canvas}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}



export default MyCanva



// function mySession() {
//   var canvas = document.getElementById('canvas');
//   var dataURL = canvas.toDataURL();
//   console.log(dataURL);
// }

// // 1 boton Clear
// // 1 boton Save

// export default mySession