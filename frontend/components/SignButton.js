import styles from "../styles/SignButton.module.scss";
const SignButton = ({ title, onClick }) => (
  <button className={styles.sign} onClick={onClick}>
    {title}
  </button>
);

export default SignButton;
