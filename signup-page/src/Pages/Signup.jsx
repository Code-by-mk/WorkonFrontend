import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Prevent digits in the name field
    if (id === 'fullName' && /\d/.test(value)) {
      return;
    }

    setValues({ ...values, [id]: value });
  };

  const validate = () => {
    const newErrors = {};

    // Validate full name
    if (!values.fullName.trim()) {

      newErrors.fullName = 'Full Name is required.';
       } 
    else if (!/^[A-Z][a-zA-Z\s]*$/.test(values.fullName.trim())) {
      newErrors.fullName =
        'Full Name must start with a capital letter and contain only letters.';
    }

    // Validate email
    if (!values.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email.trim())) {
      newErrors.email = 'Invalid email format.';
    }

    // Validate password
    if (!values.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (
      !/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(values.password.trim())
    ) {
      newErrors.password =
        'Password must include an uppercase letter, a digit, and a special character.';
    }

    // Validate phone number
    if (!values.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^\d{10}$/.test(values.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Show submitted data in a popup message
      alert(`
        Signup Successful!
        Full Name: ${values.fullName}
        Email: ${values.email}
        Phone Number: ${values.phoneNumber}
      `);
      console.log('Form submitted:', values);

      // Clear the form fields
      setValues({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Signup Page</h2>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>
        <div className="input">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
