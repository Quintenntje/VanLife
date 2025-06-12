import AuthForm from "../components/AuthForm";

export default function Login() {
  return (
    <AuthForm
      title="Login"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      buttonText="Login"
      inputFields={[
        { id: "email", type: "email", placeholder: "Email" },
        { id: "password", type: "password", placeholder: "Password" },
      ]}
    />
  );
}
