// Pending /pages/ structure to be defined with pseudoCode.
// help: Thread #03 ===> Agile.MD
import { getSession } from "next-auth/client";
import Nav from "../../components/Nav";
import Toolbar from "../../components/Toolbar";
import { useRouter } from "next/router";
// width="600" height="600"

export default function Editor({ session }) {
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "../../lib/fabric.min.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const { image, name } = session.user;
  const router = useRouter();
  // console.log(router.query);
  return (
    <>
      <Nav image={image} name={name} title={"New Design"} />
      <Toolbar />
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
