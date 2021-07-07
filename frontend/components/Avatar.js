import styles from "../styles/Avatar.module.scss";
const Avatar = ({ image }) => {
  return <img src={image} alt="avatar" className={styles.avatar} />;
};
export default Avatar;
