import logo from '../src/assets/logo.png'
import { useState,useEffect } from 'react'
import SignUpForm from './SignUpForm';
import '../public/css/Logo.css';
export default function Logo() {

    const [hideLogo, setHideLogo] = useState(false); // Hide logo
    const [displayLogo, setDisplayLogo] = useState(true); // Delete the logo after hiding it

    // Make the logo appear and deleting it
    useEffect(() => {
        document.body.classList.add('darkBody');
        const timer = setTimeout(() => {
        setHideLogo(true); 
        const displayTimer = setTimeout(() => {
            setDisplayLogo(false); 
        }, 500);
        document.body.classList.replace('darkBody', 'lightBody');
        }, 1500);
        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            <div className='logoDiv' style={{ display: displayLogo ? '' : 'none' }}>
            <img 
            src={logo} 
            alt="App logo e-motions"  
            className={`logo ${hideLogo ? 'logo-hidden' : ''}`}
            /> 
            <p className={`logoText logo ${hideLogo ? 'logo-hidden' : ''}`}>e-motions</p>
            </div>

            <SignUpForm/>
        </>
    )
}