import styles from "../styles/Home.module.scss";
import SignButton from "../components/SignButton";
import React, { useState } from "react";

// Pending gitHub Verification setup to be implemented.
// help: Thread #01 ===> Agile.MD

export default function Home() {
  const [toggle, handleToggle] = useState(false);
  console.log(toggle);
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
              onClick={() => console.log("google")}>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
