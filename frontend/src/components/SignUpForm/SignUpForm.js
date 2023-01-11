import React from 'react'
import { useState } from 'react';




function SignUpForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
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

    if (!formData.password) {
      throw new Error('Password is required')
    }
    
    try {
      const response = await fetch('http://localhost:8002/Signup', {
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
    <div class=" container flex items-center bg-teal-700 h-screen">
      <div class="container flex items-center justify-center">
        <div >
          <div class="justify-center flex "><h1 class="text-white">Join EbayNinja for free!</h1></div>
          
        <form class="justify-center flex-row items-center"onSubmit={handleSubmit}>
        <br />
          <input
            type="text"
            name="name"
            placeholder='Username'
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder='Email adress'
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          <br/>
          <div class="flex items-center justify-center ">  <button class="justify-center items-center text-white text-lg hover:text-teal-500" type="submit">Sign Up</button> </div>
        
        </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm