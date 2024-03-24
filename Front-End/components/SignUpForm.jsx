import React, { useState } from 'react';
import '../public/css/SignUpForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { Reggex } from './Reggex'; 


export default function SignUpForm() {
 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      username:"",
      password:"",
      passwordConfirmation:""
  })

  function handleChange(event){
      const { name, value } = event.target
      setFormData((prevValue) => ({
          ...prevValue,
          [name]: value
      }))  
  }

  function handleChangeUsername(event){
    const { name, value } = event.target
    setFormData((prevValue) => ({
        ...prevValue,
        [name]: Reggex(value)
    }))  
  }

  function handleSubmit(event) {
    event.preventDefault()

    const {username,password,passwordConfirmation} = formData
    const url = 'http://localhost:8080/api/registerUser';
    const texteFiltre = Reggex(formData.username);

    const data = {
      username: texteFiltre,
      password: formData.password
    }; 

    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
    };
    
    if(username,password,passwordConfirmation){
      if(password.length >= 10){ 
        if(password == passwordConfirmation) {

          axios.post(url, data, config)
          .then(function (response) {
              if(response.data == ""){   
                  navigate("/home", {replace:true})
              }else{
                alert(response.data)
              }
          })
          .catch(function (error) {
              console.log(error);
          });
        } 
      }else{
        alert("Veuillez choisir un mot de passe d'au moins 10 caractères.")
      }
    } 
  }
    
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <p>Inscription</p>
        <input
        type="text"
        placeholder="Nom d'utilisateur"
        className="formInput"
        name="username"
        onChange={handleChangeUsername}
        value={formData.username}
        required
        />
         
        <input
        type="password"
        placeholder="Mot de passe"
        className="formInput"
        name="password"
        onChange={handleChange}
        value={formData.password}
        />

        <img 
        src='../src/assets/showPassword.svg'
        alt='image to show the password content'
        className='showPassowrd'
        />
         
        <input
        type="password"
        placeholder="Confirmation mdp"
        className="formInput"
        name="passwordConfirmation"
        onChange={handleChange}
        value={formData.passwordConfirmation}
        />

        <img 
        src='../src/assets/showPassword.svg'
        alt='image to show the password content'
        className='showPassowrd'
        />

        <button className="formSubmit">S'inscrire</button>
        <p>Déjà inscrit ? 
          <Link to="/login" className='connect'> Se connecter</Link>
        </p>
      </form>
    </div>
  );
}