import React, { useRef, useEffect } from "react";

import "../functional/App.css";

export default function App() {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(emailRef.current.value)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <label>Email</label>
          <input type="text" ref={emailRef} />
        </div>
        <div className="input_group">
          <label>Password</label>
          <input type="password" ref={passwordRef} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
