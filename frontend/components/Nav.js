import styles from "../styles/Nav.module.scss";
import Avatar from "./Avatar";

const Nav = ({ image, name, title }) => {
  return (
    <nav className={styles.nav}>
      <p className={styles.title}>{title}</p>
      <div className={styles.user}>
        <p className={styles.name}>{name}</p>
        <Avatar image={image} className={styles.avatar} />
      </div>
    </nav>
  );
};

export default Nav;
