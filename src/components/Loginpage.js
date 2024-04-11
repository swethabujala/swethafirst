import React, { useState } from 'react';
import './Loginpage.css'; // Import CSS file

function Loginpage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', credentials);
  };

  return (
    <div className="container"> {/* Use className instead of style */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container"> {/* Use className instead of style */}
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-container"> {/* Use className instead of style */}
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button> {/* Use className instead of style */}
      </form>
    </div>
  );
}

export default Loginpage;
