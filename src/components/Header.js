import React from 'react';
import '../styling/Header.css';
import photo from '../images/logo-2019.png';
import image from '../images/header-mckinny-tx.jpg';


export default function Header() {

    return (
        <div className='logo'>
            <img src={photo} alt='logo' className='logo-img' />
            <div className='nav-links'>
                <a href='' className='menu'>MENU</a>
                <a href='' className='join'>JOIN <br /> THE WAIT</a>
                <a href='' className='rewards'>Ourstreet <br /> Rewards</a>
                <a href='' className='giftcards'>GIFT<br />CARDS</a>
                <a href='' className='locations'>LOCATIONS</a>
                <a href='' className='contact'>CONTACT</a>
                <a href='' className='careers'>CAREERS</a>
            </div>
            <div className='header'>
            <img src={image} alt='logo' className='header-img' />
            </div>
            <section className='header-wrap'>
        
            </section>
        </div>
    )
}