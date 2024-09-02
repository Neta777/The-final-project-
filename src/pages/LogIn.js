import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase";
export default function LogIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [error, setError] = useState("");
  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setName("");
        setTelNumber("");
      })
      .catch((error) => {
        console.log(error);
        setError("Sorry,we could't find your account");
      });
  };
  return (
    <div className="backgroundLoginPage">
      <form className="theForm">
        <h2>Log In form</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <br></br>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <br></br>
        <button onClick={login}>Log In</button>
        {error ? <p>{error}</p> : ""}
      </form>
    </div>
  );
}
