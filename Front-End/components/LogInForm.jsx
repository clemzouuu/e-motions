import React, {useState} from 'react';
import '../public/css/LogInForm.css';
import axios, { AxiosError } from 'axios'; 
import { Reggex } from './Reggex';
import { useNavigate } from 'react-router-dom';


export default function LogInForm() {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username:"",
        password:"",
    })

    function handleChange(e){
        const { name, value } = e.target
        setFormData((prevValue) => ({
            ...prevValue, 
            [name]: value
        })
        )  
    }

    function handleChangeUsername(event){
        const { name, value } = event.target
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: Reggex(value)
        }))  
    }

    function handleSubmit(e) {
        e.preventDefault()
        const url = 'http://localhost:8080/api/logUser';
        const {username,password} = formData
        const texteFiltre = Reggex(formData.username);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if(texteFiltre && password)
            if(texteFiltre.trim()!="" && password.trim() != "")
                axios.post(url, formData, config)
                .then(function (response) {  
                    console.log(response.data.id);
                    console.log(response.data.username);
                    if(response.data === '') {   
                        navigate("/home", {replace:true});
                        return
                    }
                    alert(response.data.message)
                })
                .catch(function (error) {
                    console.log(error);
                });
      
      
    }
    
    return (
        <>
            <div className="formContainer">
                <form className="form" onSubmit={handleSubmit}>
                    <p>Connexion</p>
                    <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    className="formInput"
                    name="username"
                    onChange={handleChangeUsername}
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

                    <button className="formSubmit">Se connecter</button>
                </form>
            </div>
      </>
  );
}