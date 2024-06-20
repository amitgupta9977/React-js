import React, { useState } from 'react';

const App2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    city: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
    
      console.log('Valid input:', formData);
      setFormData({
        name: '',
        email: '',
        gender: '',
        city: '',
        password: '',
      });
      setErrors({});
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (data.name.trim() === '') {
      errors.name = 'Please enter your name';
    }
    if (data.email.trim() === '') {
      errors.email = 'Please enter your email';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (data.gender === '') {
      errors.gender = 'Please select your gender';
    }
    if (data.city.trim() === '') {
      errors.city = 'Please enter your city';
    }
    if (data.password.trim() === '') {
      errors.password = 'Please enter a password';
    }

    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={errors.gender ? 'input-error' : ''}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? 'input-error' : ''}
          />
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default App2;
