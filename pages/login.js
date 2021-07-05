import Form from "../components/Form";
import styles from "../styles/Home.module.scss";
import SignButton from "../components/SignButton";
import { signIn } from "next-auth/client";
import React, { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Form
        signIn={signIn}
        username={username}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
      />
    </>
  );
};

export default Login;
