import React, { useRef, useEffect, useState } from "react";
import '../styles/canvaStyles.module.scss';


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

// 1 boton Clear
// 1 boton Save
// I am a dumb fack

export default MyCanva;
