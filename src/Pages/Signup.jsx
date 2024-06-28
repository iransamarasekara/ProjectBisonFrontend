import React, { useState } from 'react';
import './CSS/Signup.css';
import profile_default from '../Components/Assets/profile_photo_default.webp'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    index: "",
    faculty: "",
    department: "",
    batch: "",
    profile_pic: '',//profile_default,////
  });

  const [message, setMessage] = useState('');

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);


    
      let responseData;
      await fetch('https://projectbisonbackend.onrender.com/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json()).then((data) => responseData = data);

      if (responseData.success) {
        setMessage('Signup successful! Please check your email to verify your account.');
        alert('Please check your email to verify your account. If not check your spam folder.');
      } else {
        alert(responseData.errors);
      }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@uom\.lk$/;
    // if (!emailRegex.test(formData.email)) {
    //     alert('Please enter a valid uom mail address');
    //     return;
    // } 
    setMessage('Plase wait while we process your request...')
    const isFormFilled = Object.entries(formData).every(([key, value]) => {
        if (key === 'profile_pic') {
            return true;
        }
        return value.trim() !== '';
    });
    if (!isFormFilled) {
      alert('Please fill in all the required fields.');
      return;
    }
    signup();
  };

  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="hello-container">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <p>Login with your personal info</p>
          <div>
            <button className='switch signup button' onClick={() => window.location.replace("/login")}>Login</button>
          </div>
        </div>
        <div className="signup-form">
          <h1>Sign Up</h1>
          {/* {message && <p className="message">{message}</p>} */}
          <div className='signup-fields'>
          <form onSubmit={handleSubmit} className='signup-fields'>
            <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Full Name' required />
            <input name='index' value={formData.index} onChange={changeHandler} type='text' placeholder='University Index' required />
            <input name='faculty' value={formData.faculty} onChange={changeHandler} type='text' placeholder='Faculty' required />
            <input name='department' value={formData.department} onChange={changeHandler} type='text' placeholder='Department' required />
            <input name='batch' value={formData.batch} onChange={changeHandler} type='text' placeholder='Batch' required />
            <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' required />
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' required />
            {message && <p className="message">{message}</p>}
            <button type="submit">Sign Up</button>
          </form>
          </div>
          
          {/* <button onClick={handleSubmit}>Sign Up</button> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;

