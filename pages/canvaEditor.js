// Pending /pages/ structure to be defined with pseudoCode.
// help: Thread #03 ===> Agile.MD
import MyCanva from '../components/Canva'
import mySession from '../components/mySession'
import styles from "../styles/CanvaEditor.module.scss"


// width="600" height="600"

export default function Editor() {
     return (
          <div className={styles.canva}>
               <MyCanva id="canvas"></MyCanva>
               <button onClick={() => mySession()}>Save me!</button>
          </div>
     )
}


// function mySession() {
//      var canvas = document.getElementById('canvas');
//      var dataURL = canvas.toDataURL();
//      console.log(dataURL);
//    }