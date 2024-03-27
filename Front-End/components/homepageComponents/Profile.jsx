import { Reggex } from "../Reggex"
import axios from 'axios'; 
import React, { useState } from 'react';


export default function Profile() {

    const [formData, setFormData] = useState({
        username:"",
        password:"",
        oldPassword:""
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
    
        const {username,password,oldPassword} = formData
        const url = 'http://localhost:8080/api/profile/';
        const texteFiltre = Reggex(formData.username);
    
        const data = {
          username: texteFiltre,
          password: formData.password,
          oldPassword: formData.oldPassword
        }; 
    
        const config = {
          headers: {
              'Content-Type': 'application/json'
          }
        };
        
        if(password && oldPassword || username || username && password && oldPassword){
          if(password.length >= 10 && oldPassword.length > 10){ 
             
            /*  axios.put(url, data, config)
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
            */
          }else{
            alert("Veuillez choisir un mot de passe d'au moins 10 caractères.")
          }
        } 
      }



    return( 
        <div className="formContainer" onSubmit={handleSubmit}>
            <form className="form">
                <p>Mettre à jour mon nom d'utilisateur</p>
                <input
                type="text"
                placeholder="Nouveau nom d'utilisateur"
                className="formInput"
                name="username"
                onChange={handleChangeUsername}
                value={formData.username}
                />

                <p>Modifier mon mot de passe</p>

                <input
                type="text"
                placeholder="Mot de passe actuel"
                className="formInput"
                name="oldPassword"
                onChange={handleChange}
                value={formData.oldPassword}
                
                />

                <input
                type="text"
                placeholder="Nouveau mot de passe"
                className="formInput"
                name="password"
                onChange={handleChange}
                value={formData.password}
                />

            <button className="formSubmit">Supprimer mon compte</button>
            <br/>
            <button className="formSubmit">Valider</button>
            </form> 
        </div>
    )
}