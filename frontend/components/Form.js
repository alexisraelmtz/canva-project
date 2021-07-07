// import { useSession, signIn, signOut } from "next-auth/client";
import styles from "../styles/Form.module.scss";
import SignButton from "./SignButton";
import { signIn } from "next-auth/client";
import React, { useState } from "react";
import { CREATE_USER } from "../graphql/Mutation";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import googleLogo from "../public/assets/google_logo.svg";

const Form = ({ username, password, setPassword, setUsername }) => {
  const [toggle, handleToggle] = useState(false);
  const [createUser, { error, data }] = useMutation(CREATE_USER);
  return (
    <div className={styles.background}>
      <div className={styles["frosted-container"]}>
        <div className={styles.frosted}>
          {/* <div className={styles.section}>
            <p className={styles.email}>Email</p>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.section}>
            <p className={styles.password}>Password</p>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          </div> */}
          {/* <div className={styles.account}>
            {toggle ? (
              <SignButton
                title={"Sign up"}
                onClick={() => {
                  createUser({
                    variables: { username: username, password: password },
                  });
                }}
              />
            ) : (
              <SignButton title={"Sign in"} onClick={() => console.log("in")} />
            )}
          </div> */}
          <div className={styles.section}>
            <button
              className={styles.google}
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/canvas",
                })
              }>
              <img
                src={"./assets/google_logo.svg"}
                alt="Picture of the author"
                className={styles.logo}
              />
              Continue with Google
            </button>
            {/* <button
              className={styles.google}
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/canvas",
                })
              }>
              Continue with GitHub
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
