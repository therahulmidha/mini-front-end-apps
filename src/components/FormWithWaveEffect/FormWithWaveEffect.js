import React, { useEffect, useRef } from "react";
import "./FormWithWaveEffect.css";

export const FormWithWaveEffect = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  useEffect(() => {
    inputEmailRef.current.innerHTML = "Email"
      .split("")
      .map(
        (char, index) =>
          `<span style="transition-delay: ${index * 50}ms;">${char}</span>`
      )
      .join("");
    inputPasswordRef.current.innerHTML = "Password"
      .split("")
      .map(
        (char, index) =>
          `<span style="transition-delay: ${index * 50}ms;">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div className="wave-form-container center-vh">
      <form>
        <h1>Login Form</h1>
        <input
          placeholder="Email"
        />
        <label ref={inputEmailRef} 
          className="email-label">
          E-mail
        </label>
        <input
          placeholder="Password"
        />
        <label ref={inputPasswordRef} 
          className="password-label"
          >
          Password
        </label>
        <button>Login</button>
        <p>
          Don't have an account?&nbsp;<a href="/">Register</a>
        </p>
      </form>
    </div>
  );
};
