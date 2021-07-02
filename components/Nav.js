import styles from "../styles/Nav.module.scss";
import { useSession } from "next-auth/client";

const Nav = () => {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <nav className={styles.nav}>
      <div>
        <p>Your designs</p>
      </div>
    </nav>
  );
};

export default Nav;
