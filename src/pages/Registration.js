import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Registration.css";
import { useState } from "react";
import { auth } from "../Firebase";
export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [creditNum, setCreditNum] = useState("");
  const [CVV, setCvv] = useState("");
  const [error, setError] = useState("");
  const creditText =
    "You don't have to pay now; we're just taking your card details to reserve the place. You'll pay after arriving at the retreat.";
  const register = (e) => {
    e.preventDefault();
    if (password !== copyPassword) {
      setError("the passwords don't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        localStorage.setItem("userName", name);
        localStorage.setItem("userTelNumber", telNumber);
        localStorage.setItem("userCardNumber", creditNum);
        localStorage.setItem("userCardCVV", CVV);

        setName("");
        setEmail("");
        setPassword("");
        setCopyPassword("");
        setTelNumber("");
        setCreditNum("");
        setCvv("");
        setError("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="backgroundRegistrationPage">
      <form className="theForm" onSubmit={register}>
        <h2>Registration form</h2>
        <input
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="your tel number"
          value={telNumber}
          onChange={(e) => setTelNumber(e.target.value)}
          type="text"
        ></input>
        <br></br>
        <input
          placeholder="your credit card full number"
          value={creditNum}
          onChange={(e) => setCreditNum(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="CVV"
          value={CVV}
          onChange={(e) => setCvv(e.target.value)}
          type="text"
        ></input>
        <br></br>
        <p className="creditText">{creditText}</p>
        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>

        <input
          placeholder="Choose your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <br></br>
        <input
          placeholder="enter your password again"
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="password"
        ></input>

        <button type="submit">To participate</button>
        {error ? <p>{error}</p> : ""}
      </form>
    </div>
  );
}
