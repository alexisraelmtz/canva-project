// Pending /pages/ structure to be defined with pseudoCode.
// help: Thread #03 ===> Agile.MD

import { signOut } from "next-auth/client";
import Nav from "../components/Nav";
import CreateCanva from "../components/CreateCanva";
import Thumbnail from "../components/Thumbnail";
import { getSession } from "next-auth/client";
import styles from "../styles/ListCanvas.module.scss";
import { GET_ALLCANVAS_BY_USER } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const ListCanvas = ({ session }) => {
  const { image, name, email } = session.user;
  const { loading, error, data } = useQuery(GET_ALLCANVAS_BY_USER, {
    variables: { username: session.user.email },
  });

  if (loading) return <p>Loading ...</p>;

  console.log(data);
  return (
    <>
      <Nav image={image} name={name} title={"Your Designs"} />
      <div className={styles.listcontainer}>
        {data.getAllCanvaByUser
          // .sort((a, b) => b.create_date - a.create_date)
          .map((canva) => (
            <Thumbnail
              create_date={canva.create_date}
              id={canva.id}
              name={canva.name}
              author={name}
              key={canva.create_date}
            />
          ))}
        <div className={styles.canvaspace}>
          <CreateCanva author={name} username={email} />
        </div>

        <div className={styles.signout}>
          <button
            className={styles.signoutbutton}
            onClick={() =>
              signOut({ callbackUrl: "http://localhost:3000/login" })
            }>
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
