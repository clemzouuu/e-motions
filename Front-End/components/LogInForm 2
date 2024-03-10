import React, {useState} from 'react';
import '../public/css/SignUpForm.css';

export default function SignUpForm() {

    const [formData, setFormData] = useState({
        username:"",
        password:"",
    })

    function handleChange(event){
        const { name, value, type, checked } = event.target
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: type === 'checkbox' ? checked : value
        })
        )  
    }

    function handleSubmit(event) {
        event.preventDefault()

        const {username,password} = formData
        
        if(username,password){
          
        }
      }
    
    return (
        <div className="formContainer">
            <form className="form" onSubmit={handleSubmit}>
                <p>Connexion</p>
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

                <button className="formSubmit">Se connecter</button>
            </form>
      </div>
  );
}