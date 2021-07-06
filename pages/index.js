import React from "react";
import { getSession } from "next-auth/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Pending gitHub Verification setup to be implemented.
// help: Thread #01 ===> Agile.MD

export default function Home({ session }) {
  return (
    <div>
      {/* <LogIn toggle={toggle} handleToggle={handleToggle} signIn={signIn} /> */}

      {/* {!session && (
        <LogIn toggle={toggle} handleToggle={handleToggle} signIn={signIn} />
      )} */}
      {/* {session && (
        <>
          <pre>{JSON.stringify(session?.user, null, 2)}</pre>
          <p>{session.user.name}</p>
          <img src={session.user.image}></img>

          <button onClick={() => signOut()}>Sign out</button>
        </>
      )} */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }
  if (session) {
    console.log(session);
    return {
      redirect: {
        destination: "/canvas",
        permanent: false,
      },
      props: { session },
    };
  }
}
