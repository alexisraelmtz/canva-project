import Form from "../components/Form";
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
