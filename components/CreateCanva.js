import styles from "../styles/CreateCanva.module.scss";
import PlusButton from "./PlusButton";
const CreateCanva = ({ author }) => {
  return (
    <div className={styles.newcanva} onClick={() => console.log("new canva")}>
      <div className={styles.addcanva}>
        <PlusButton color={"#7795FF"} />
      </div>
      <div className={styles.canvasdata}>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default CreateCanva;
