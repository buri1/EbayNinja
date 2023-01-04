import React from 'react'
import { useState } from 'react';




function SignUpForm() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    async function handleSubmit(event) {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:8002/createUser', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          console.log(data);
        if (response) {
          window.location.assign('http://localhost:3000/App')
          
        } else {
          throw new Error('Condition not met')
          
        }
        } catch (error) {
          console.error(error);
        }
      }
  
    return (
      <form onSubmit={handleSubmit}>
        <label >Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label >Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label >Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    );
  }

export default SignUpForm