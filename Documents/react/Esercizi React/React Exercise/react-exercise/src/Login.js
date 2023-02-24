import React, { useState } from "react";

const initialState = {
  username: "",
  password: "",
  remember: false
};

export function Login(props) {
  
  const [formData, setFormData] = useState(initialState);
  const [passwordLength, setPasswordLength] = useState(0);

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setFormData((formData) => {
      return {
        ...formData,
        [name]: type === "checkbox" ? checked : value
      };
    });

    if (name === "password") {
      setPasswordLength(value.length);
    }
  }

  function handleLogin() {
    props.onLogin(formData);
  }

  function handleReset() {
    console.log("reset");
    setFormData(initialState);
    setPasswordLength(0);
  }

  const buttonStyle = {
    backgroundColor: passwordLength < 8 ? "red" : "green"
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      <h2>Username</h2>
      <input
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <h2>Password</h2>
      <input
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        type="password"
      />
      <h2>Remember password</h2>
      <input
        name="remember"
        type="checkbox"
        checked={formData.remember}
        onChange={handleInputChange}
      />
      <div>
        <button
          onClick={handleLogin}
          disabled={!formData.username || !formData.password}
          style={buttonStyle}
          type="submit"
        >
          Login
        </button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}


