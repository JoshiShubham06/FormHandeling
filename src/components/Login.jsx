import { useRef, useState } from "react";

export default function Login() {

  const [formIsInvalid, setFormIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event){
    event.preventDefault();
    const enteredEmail = email.current.value; 
    // const enteredPassword = password.current.value; 
    const emailIsValid = enteredEmail.includes('@');
    if(!emailIsValid){
      setFormIsInvalid(true);
      return;
    }
    setFormIsInvalid(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={email}
            type="email"
            name="email"
          />
          <div className="control-error">
            {formIsInvalid && <p>Please enter a valid data.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
           ref={password}
            type="password"
            name="password"
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
