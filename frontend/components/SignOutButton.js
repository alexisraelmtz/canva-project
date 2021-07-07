import styles from "../styles/SignOutButton.module.scss";
const SignOutButton = ({ signOut }) => {
  return (
    <button
      className={styles.signoutbutton}
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}>
      →
    </button>
  );
};

export default SignOutButton;
