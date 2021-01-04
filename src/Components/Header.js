import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../App.css';

const Header = () => {
    return (
        <div  >

            <h4 id="home" className='logo' style={{fontSize:"2rem", fontWeight:'bolder', color:"#6350af"}}>
                <span style={{color:'#48c9b0', backgroundColor:"transparent" }}>&lsaquo; </span> 
                Afaque Ahmed   
                <span style={{color:'#48c9b0', backgroundColor:"transparent" }}> / &rsaquo;</span>
            </h4>
            <Menu right>
                <a href='#home'>Home</a>
                <a href="#About">About</a>
                <a href='#Skills'>Skills</a>
                <a href='#Projects'>Projects</a>
                <a href='#Contact'>Contact</a>
            </Menu>
            

        </div>
    );
};

export default Header;