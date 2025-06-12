import AuthForm from "../components/AuthForm";
import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    setLoginData({ email, password });
    console.log("Login data submitted:", loginData);
  }

  return (
    <AuthForm
      title="Login"
      onSubmit={handleLoginSubmit}
      buttonText="Login"
      inputFields={[
        { id: "email", type: "email", placeholder: "Email" },
        { id: "password", type: "password", placeholder: "Password" },
      ]}
    />
  );
}
