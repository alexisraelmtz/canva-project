// import { useSession, signIn, signOut } from "next-auth/client";
import styles from "../styles/Home.module.scss";
import SignButton from "./SignButton";

const LogIn = ({ toggle, handleToggle, signIn }) => {
  return (
    <div className={styles.background}>
      <div className={styles["frosted-container"]}>
        <div className={styles.frosted}>
          <div className={styles.section}>
            <p className={styles.email}>Email</p>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.section}>
            <p className={styles.password}>Password</p>
            <input type="text" className={styles.input}></input>
          </div>
          <div className={styles.account}>
            <p>
              {toggle
                ? "Already have an account? "
                : "Don’t you have an account? "}
              <a
                href=""
                className={styles.bold}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(!toggle);
                }}>
                {toggle ? "Log in" : "Sign up"}
              </a>
            </p>
          </div>
          <div className={styles.account}>
            {toggle ? (
              <SignButton title={"Sign up"} onClick={() => console.log("up")} />
            ) : (
              <SignButton title={"Sign in"} onClick={() => console.log("in")} />
            )}
          </div>
          <div className={styles.section}>
            <button
              className={styles.google}
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/listCanvas",
                })
              }>
              Continue with Google
            </button>
            <button
              className={styles.google}
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/listCanvas",
                })
              }>
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
