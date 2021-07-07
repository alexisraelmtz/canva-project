import styles from "../styles/CreateCanva.module.scss";
import PlusButton from "./PlusButton";
import { CREATE_CANVA } from "../graphql/Mutation";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";

const CreateCanva = ({ username, author }) => {
  const router = useRouter();
  const [createCanva, { error, data }] = useMutation(CREATE_CANVA);

  const redirectCanva = async () => {
    const getCanvaID = await createCanva({
      variables: { username: username },
    });
    const canvaID = await getCanvaID.data.createCanva.id;
    router.push(`/canvas/${canvaID}`);
  };
  return (
    <div
      className={styles.newcanva}
      onClick={
        () => redirectCanva()
        // {
        // createCanva({
        //   variables: { username: username },
        // });
        // }
      }>
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
