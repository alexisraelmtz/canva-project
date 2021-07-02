// Pending /pages/ structure to be defined with pseudoCode.
// help: Thread #03 ===> Agile.MD
import { signOut } from "next-auth/client";
import Nav from "../components/Nav";
const ListCanvas = () => {
  return (
    <div>
      <Nav />
      All canvas
      <button
        onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}>
        Sign out
      </button>
    </div>
  );
};

export default ListCanvas;
