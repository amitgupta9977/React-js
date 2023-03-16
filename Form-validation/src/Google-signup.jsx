import React, { useState } from 'react';
import './App.css'


function SignupForm() {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const errors = {};
    if (!fname) {
      errors.fname = 'Please enter your First name';
    }
    if (!lname) {
      errors.lname = 'Please enter your First name';
    }
    if (!email) {
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!password) {
      errors.password = 'Please enter a password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      

      setSuccess(true);
      setfName('');
      setlName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      setErrors(errors);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Your Google Account</h1>
      <label>
        First Name:
        <input
          type="text"
          value={fname}
          onChange={(event) => setfName(event.target.value)}
        />
        {errors.fname && <div className="error">{errors.fname}</div>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lname}
          onChange={(event) => setlName(event.target.value)}
        />
        {errors.lname && <div className="error">{errors.lname}</div>}
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </label>
      <button type="submit">Sign up</button>
      {success && <div className="success">Success! Your account has been created.</div>}
    </form>
  );
}

export default SignupForm;
