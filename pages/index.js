import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import LogIn from "../components/LogIn";
import ListCanvas from "./listCanvas";

// Pending gitHub Verification setup to be implemented.
// help: Thread #01 ===> Agile.MD

export default function Home() {
  const router = useRouter();
  const [session, loading] = useSession();
  const [toggle, handleToggle] = useState(false);
  const [userSession, setUserSession] = useState({});

  useEffect(() => {
    if (session) {
      setUserSession(session);
    }
    console.log(userSession);
  }, []);

  return (
    <div>
      {!session && !loading && (
        <LogIn toggle={toggle} handleToggle={handleToggle} signIn={signIn} />
      )}
      {session && (
        <>
          <pre>{JSON.stringify(session?.user, null, 2)}</pre>
          <p>{session.user.name}</p>
          <img src={session.user.image}></img>

          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return {
//     props: { session },
//   };
// }
