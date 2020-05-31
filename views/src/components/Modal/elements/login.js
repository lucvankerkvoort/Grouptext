import React, { useState } from "react";
import { useContext } from "react";
import { store } from "../../../services/Store";

export const Login = ({ close }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const info = {
      ...username,
      ...password,
    };
    dispatch({ type: "login", payload: info });
    close();
  };
  return (
    <>
      <input
        name="username"
        type="name"
        placeholder="Username"
        onChange={(e) => setUsername({ [e.target.name]: e.target.value })}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword({ [e.target.name]: e.target.value })}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
