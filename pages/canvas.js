// Pending /pages/ structure to be defined with pseudoCode.
// help: Thread #03 ===> Agile.MD

import { signOut } from "next-auth/client";
import Nav from "../components/Nav";
import CreateCanva from "../components/CreateCanva";
import { getSession } from "next-auth/client";
import styles from "../styles/ListCanvas.module.scss";

const ListCanvas = ({ session }) => {
  const { image, name } = session.user;
  return (
    <>
      <Nav image={image} name={name} title={"Your Designs"} />
      <div className={styles.listcontainer}>
        <CreateCanva author={name} />

        <div className={styles.signout}>
          <button
            className={styles.signoutbutton}
            onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}>
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default ListCanvas;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }
  return {
    props: { session },
  };
}
