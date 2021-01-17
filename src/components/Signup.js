import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [messageError, setmessageError] = useState("");
  const [disable, setDisable] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setmessageError("Password doesn't match");
    }

    try {
      setmessageError("");
      setDisable(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setmessageError("Couldn't create account");
    }

    setDisable(false);
  };

  return (
    <div className="text-white flex items-center justify-center h-screen">
      {messageError && alert(messageError)}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 p-4 w-96"
      >
        <label
          htmlFor="email"
          className="flex justify-between flex-col w-10/12"
        >
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md p-2 focus:outline-none border-2 border-gray-100 text-black"
            placeholder="Email"
            ref={emailRef}
            required
          />
        </label>
        <label
          htmlFor="password"
          className="flex justify-between flex-col w-10/12"
        >
          <input
            type="password"
            id="password"
            name="passowrd"
            className="rounded-md p-2 focus:outline-none border-2 border-gray-100 text-black"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </label>
        <label
          htmlFor="confirm-password"
          className="flex justify-between flex-col w-10/12"
        >
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="rounded-md p-2 focus:outline-none border-2 border-gray-100 text-black"
            placeholder="Confirm Password"
            ref={passwordConfirmRef}
            required
          />
        </label>
        <button
          disabled={disable}
          className="bg-red-500 p-2 rounded-lg w-10/12 hover:bg-red-400 focus:outline-none"
        >
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default Signup;
