import styles from "../styles/CreateCanva.module.scss";
import PlusButton from "./PlusButton";
import { CREATE_CANVA } from "../graphql/Mutation";
import { useMutation } from "@apollo/client";

const CreateCanva = ({ username, author }) => {
  const [createCanva, { error, data }] = useMutation(CREATE_CANVA);

  return (
    <div
      className={styles.newcanva}
      onClick={() => {
        createCanva({
          variables: { username: username },
        });
      }}>
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
