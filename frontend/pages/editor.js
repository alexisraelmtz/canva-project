// Pending /pages/ structure to be defined with pseudoCode.
// help: Thread #03 ===> Agile.MD
import MyCanva from "../components/Canva";
import { getSession } from "next-auth/client";
import Nav from "../components/Nav";
import Toolbar from "../components/Toolbar";

// width="600" height="600"

export default function Editor({ session }) {
  const { image, name } = session.user;
  return (
    <>
      <Nav image={image} name={name} title={"New Design"} />
      <Toolbar />
      <MyCanva />
    </>
  );
}

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
