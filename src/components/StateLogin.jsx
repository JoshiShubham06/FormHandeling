import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleEventBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleEventBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput("", (value) => {
    return hasMinLength(value, 6);
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          value={emailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          type="email"
          name="email"
          error={emailHasError && "Please Enter a valid Email!"}
        />
        <Input
          label="Password"
          id="password"
          value={passwordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          type="password"
          name="password"
          error={passwordHasError && "Please Enter a valid Password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
