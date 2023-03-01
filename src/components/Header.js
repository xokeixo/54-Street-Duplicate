import React from 'react';
import '../styling/Header.css';
import photo from '../images/logo-2019.png';


export default function Header() {

    return (
        <div className='header'>
            <img src={photo} alt='logo' className='logo-img' />
            <div className='nav-links'>
                <a href='' className='menu'>MENU</a>
                <a href="" className='join'>JOIN <br /> THE WAIT</a>
                <a href='' className='rewards'>Outstreet <br /> Rewards</a>
                <a href='' className='giftcards'>GIFT<br />CARDS</a>
                <a href='' className='locations'>LOCATIONS</a>
                <a href='' className='contact'>CONTACT</a>
                <a href='' className='careers'>CAREERS</a>
            </div>
            
            {/* <h2 className='head-h2'>Welcome, my name is</h2>
            <div className='typewriter'>
                
            </div>
            <br/>
            <h2 className='head-h2'>I like to build things.</h2>
            <br/>
            <h3 className='head-h3'>I am a software engineer that resides in McKinney, TX.<br/> 
            I like creating custom applications to help make those<br/> around me lives easier and efficient.</h3>
            <br/><br/><br/><br/><br/><br/><br/>
            <i class='arrow down'></i> */}
        </div>
    )
}