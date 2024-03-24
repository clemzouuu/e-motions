import { Link } from 'react-router-dom';
import "../public/css/homepage/Homepage.css"
import Profile from './homepageComponents/Profile';
import Objectives from './homepageComponents/Objectives';
import Mood from './homepageComponents/Mood'; 
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './homepageComponents/Home';


export default function Homepage() {
    return(
        <div className="body">
            <div className="menu">
                <span className='menuButtons'>
                    <Link to="/home" className='subMenuButtons'>
                        <img src="../src/assets/greyLogo.png" className="logoHomepage"/> 
                        <h1 className='mainTitle'>e-motions</h1>
                    </Link> 

                    <Link to="/home/objectives">
                        <h2>Objectifs</h2>
                    </Link>
                    <br/>

                    <Link to="/home/mood">
                        <h2>Mood</h2>
                    </Link>
                    <br/>

                    <Link to="/home/profile">
                        <h2>Profil</h2>
                    </Link>
                    <br/>

                    <Link to="/">
                        <h2>Déconnexion</h2>
                    </Link>
                </span>
            </div>

            <div className="dashboard">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="profile" element={<Profile/>} />
                    <Route path="mood" element= {<Mood/>} />
                    <Route path="objectives" element={<Objectives/>} />
                </Routes>
                <Outlet />
            </div>
        </div>
    )
}