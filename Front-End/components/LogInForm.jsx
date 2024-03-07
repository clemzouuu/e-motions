import React, {useState} from 'react';
import '../public/css/LogInForm.css';

export default function LogInForm() {

    const [formData, setFormData] = useState({
        username:"",
        password:"",
    })

    function handleChange(e){
        const { name, value } = e.target
        setFormData((prevValue) => ({
            ...prevValue, // Spread operator to copy the old values
            [name]: value
        })
        )  
    }

    function handleSubmit(e) {
        e.preventDefault()

        const {username,password} = formData
        if(username && password)
            if(username.trim()!="" && password.trim() != "")
                alert("cc")
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
      </>
  );
}