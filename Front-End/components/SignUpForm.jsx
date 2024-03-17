import React, {useState } from 'react';
import '../public/css/SignUpForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';  


export default function SignUpForm() {
 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      username:"",
      password:"",
      passwordConfirmation:""
  })

  function handleChange(event){
      const { name, value, type, checked } = event.target
      setFormData((prevValue) => ({
          ...prevValue,
          [name]: type === 'checkbox' ? checked : value
      }))  
  }

  function handleSubmit(event) {
    event.preventDefault()

    const {username,password,passwordConfirmation} = formData
    const url = 'http://localhost:8080/api/registerUser';

    const data = {
      username: formData.username,
      password: formData.password
    };

    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
    };
    
    if(username,password,passwordConfirmation){
      if(password == passwordConfirmation) {

        axios.post(url, data, config)
        .then(function (response) {
            if(response.data == ""){   
                navigate("/homepage", {replace:true})
            }else{
              alert(response.data)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
      } 
    } 
  }
    
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <p>Inscription</p>
        <input
        type="sername"
        placeholder="Nom d'utilisateur"
        className="formInput"
        name="username"
        onChange={handleChange}
        value={formData.username}
        />

        <input
        type="password"
        placeholder="Mot de passe"
        className="formInput"
        name="password"
        onChange={handleChange}
        value={formData.password}
        />

        <input
        type="password"
        placeholder="Confirmation mdp"
        className="formInput"
        name="passwordConfirmation"
        onChange={handleChange}
        value={formData.passwordConfirmation}
        />

        <button className="formSubmit">S'inscrire</button>
        <p>Déjà inscrit ? 
          <Link to="/login">Se connecter</Link>
        </p>
      </form>
    </div>
  );
}