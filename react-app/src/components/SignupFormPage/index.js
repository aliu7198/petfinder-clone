import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [country, setCountry] = useState(undefined)
  // const [zipCode, setZipCode] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      console.log("🚀 ~ file: index.js:25 ~ handleSubmit ~ data:", data);
      // console.log("🚀 ~ file: index.js:25 ~ handleSubmit ~ lastName:", lastName)
      // console.log("🚀 ~ file: index.js:25 ~ handleSubmit ~ firstName:", firstName)
      // console.log("🚀 ~ file: index.js:25 ~ handleSubmit ~ zipCode:", zipCode)
      // console.log("🚀 ~ file: index.js:25 ~ handleSubmit ~ data:", data)
      if (data) {
        setErrors(data);
      }
    } else {
      setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
  };

  return (
    <div className="body">
      <div className="login-form__wrapper">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Sign Up</h1>
          <label>
            First name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <p className="errors">{errors.first_name}</p>
          <label>
            Last name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <p className="errors">{errors.last_name}</p>
          {/* <label>
          Country of Residence
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="" disabled selected>Choose country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>
        </label>
        <label>
          Postal Code
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label> */}
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p className="errors">{errors.email}</p>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="errors">{errors.password}</p>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <p className="errors">{errors.confirmPassword}</p>
          <button type="submit" className="animal-form__submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;
