// Pending /pages/ structure to be defined with pseudoCode.
// help: Thread #03 ===> Agile.MD
import { getSession } from "next-auth/client";
import { signOut } from "next-auth/client";
import Nav from "../../components/Nav";
import Toolbar from "../../components/Toolbar";
import { useRouter } from "next/router";
import SignOutButton from "../../components/SignOutButton";

export default function Editor({ session }) {
  const { image, name } = session.user;
  const router = useRouter();
  // console.log(router.query);
  return (
    <>
      <Nav image={image} name={name} title={"New Design"} />
      <Toolbar />
      <SignOutButton signOut={signOut} />
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
