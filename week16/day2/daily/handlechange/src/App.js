import React, { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    destination: '',
    lactoseFree: false,
    nutsFree: false,
    veganMeal: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
    const urlParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      lactoseFree: formData.lactoseFree ? 'on' : '',
      nutsFree: formData.nutsFree ? 'on' : '',
      veganMeal: formData.veganMeal ? 'on' : '',
    }).toString();
    
    const url = `http://localhost:3000/?${urlParams}`;
    
    window.location.href = url;
  };

  return (
    <div className="container">
      <h2>Entered information:</h2>
      <p>Online Learning</p>
      <p className="name">Your name: {formData.firstName} {formData.lastName}</p>
      <p className="age">Your age: {formData.age}</p>
      <p className="gender">Your gender: {formData.gender}</p>
      <p className="destination">Your destination: {formData.destination}</p>
      <p className="dietary">Your dietary restrictions:</p>
      <ul>
        <li className="nuts-free">Nuts free: {formData.nutsFree ? 'Yes' : 'No'}</li>
        <li className="lactose-free">Lactose free: {formData.lactoseFree ? 'Yes' : 'No'}</li>
        <li className="vegan-meal">Vegan meal: {formData.veganMeal ? 'Yes' : 'No'}</li>
      </ul>
  
      <h2>Enter information:</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Your First Name"
          className="input"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Your Last Name"
          className="input"
        />
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your Age"
          className="input"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            className="radio"
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            className="radio"
          />
          Female
        </label>
        <br />
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="select"
        >
          <option value="">Select your destination</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
            className="checkbox"
          />
          Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
            className="checkbox"
          />
          Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="veganMeal"
            checked={formData.veganMeal}
            onChange={handleChange}
            className="checkbox"
          />
          Vegan meal
        </label>
        <br />
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
  }

export default App;