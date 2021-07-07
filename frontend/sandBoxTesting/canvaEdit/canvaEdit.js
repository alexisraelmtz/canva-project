const component = document.getElementById('canvas')

component.width = window.innerWidth * 0.75;
component.height = window.innerHeight * 0.75;

const defaultColor = 'white'
const canvas = new fabric.Canvas("canvas", {
     backgroundColor: defaultColor
});


function removeElement() {
     canvas.getActiveObjects().forEach((obj) => {
          canvas.remove(obj)
     });
     canvas.discardActiveObject().requestRenderAll()
}


function doRectangle(selection) {
     console.log(selection)
     const canvCenter = canvas.getCenter()
     const figure = new fabric.Rect({
          originY: 'center',
          originX: 'center',
          top: canvCenter.top,
          left: canvCenter.left,
          width: 200,
          height: 200,
          fill: selection,
     });
     canvas.add(figure)
     canvas.requestRenderAll()
}


function doCircle(selection) {
     const canvCenter = canvas.getCenter()
     const figure = new fabric.Circle({
          originY: 'center',
          originX: 'center',
          top: canvCenter.top,
          left: canvCenter.left,
          radius: 100,
          // width: 500,
          // height: 500,
          fill: selection,
     });
     canvas.add(figure)
     canvas.requestRenderAll()
}



function doTriangle(selection) {
     const canvCenter = canvas.getCenter()
     const figure = new fabric.Triangle({
          originY: 'center',
          originX: 'center',
          top: canvCenter.top,
          left: canvCenter.left,
          // angle: 45,
          width: 200,
          height: 200,
          fill: selection,
     });
     canvas.add(figure)
     canvas.requestRenderAll()
}


let currentMode = false;
const modes = {
     drawing: 'drawing'
}

let startDrawingColor = 'black';
let startDrawingSize = 10;


function doSize(selection) {
     startDrawingSize = selection
     canvas.freeDrawingBrush.width = startDrawingSize
     // canvas.requestRenderAll()
}


function doColor(selection) {
     startDrawingColor = selection
     canvas.freeDrawingBrush.color = startDrawingColor
     // canvas.requestRenderAll()
}



function toggleMode(mode) {
     if (mode === modes.drawing) {
          if (currentMode === modes.drawing) {
               currentMode = '';
               canvas.isDrawingMode = false;
               canvas.requestRenderAll();
          } else {
               currentMode = modes.drawing
               canvas.isDrawingMode = true
               // canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
               // canvas.freeDrawingBrush.strokeLineCap = "round"
               canvas.freeDrawingBrush.width = startDrawingSize;
               canvas.freeDrawingBrush.color = startDrawingColor;
               canvas.requestRenderAll();
          }
     }
}


function startText(text, selection) {
     console.log(text)
     const canvCenter = canvas.getCenter()
     const figure = new fabric.Text({
          originY: 'center',
          originX: 'center',
          top: canvCenter.top,
          left: canvCenter.left,
          content: 'Hello,',
          // angle: 45,
          // width: 200,
          // height: 200,
          fill: selection
     });
     canvas.add(figure)
     canvas.requestRenderAll()
}



function clearDrawing() {
     { canvas.clear() };
     canvas.backgroundColor = defaultColor;
}


// let restoreDrawing = [];
// let position = -1;

// function undoLast() {
//      if (position <= 0) {
//           clearDrawing();
//      } else {
//           position -= 1;
//           restoreDrawing.pop();
//           context.putImageData(restoreDrawing[position], 0, 0);
//      }
// }


const saveDrawing = () => {
     let session = canvas.toJSON();
     console.log(session);
     return session
}



const loadSession = (session) => {
     return canvas.loadFromJSON(session, canvas.renderAll.bind(canvas));
}



const exportDrawing = () => {
     let fullQuality = canvas.toDataURL('username-date-session', 1.0);
     return console.log(fullQuality)
}
