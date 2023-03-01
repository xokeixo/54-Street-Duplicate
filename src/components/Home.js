import React from "react";
import '../styling/SideNav.css';
import happyhouricon from '../images/happy_hour_icon.png'
import glutenicon from '../images/gluten-icon.png';
import joinicon from '../images/join_the_wait_icon.png';
import ordericon from '../images/order_online_icon.png';
import rewardsicon from '../images/ourstreet_rewards_icon.png';
import beericon from '../images/beer_card_icon.png';

export default function SideNav() {

    return (
        <div className="nav2">
            <div>
                <a href='' className='large-locations'>LOCATIONS</a>
            </div>
            <div className='nav-links2'>
                <a href='' className='menu2'>MENU</a>
                    <br/><br/>

                    <div class="menu-line1"></div>

                <a href='' className='join2'>JOIN <br /> THE WAIT</a>
                    <br/><br/>

                    <div class="menu-line2"></div>

                <a href='' className='rewards2'>OURSTREET <br /> REWARD$</a>
                    <br/><br/>

                    <div class="menu-line3"></div>

                <a href='' className='giftcards2'>GIFT<br />CARDS</a>
                    <br/><br/>

                    <div class="menu-line4"></div>

                <a href='' className='locations2'>LOCATIONS</a>
                    <br/><br/>

                    <div class="menu-line5"></div>

                <a href='' className='contact2'>CONTACT</a>
                    <br/><br/>

                    <div class="menu-line6"></div>

                <a href='' className='careers2'>CAREERS</a>
                    <br/><br/>

                    <div class="menu-line7"></div>
            </div>

            <div className="main-menu">
                <div className="order-now-icon">
                    <a href="#" aria-label="Order Online Now">
                        <img src={happyhouricon} />
                        <br/>
                        Order
                        <br/>
                        NOW + Delivery
                    </a>
                </div>

                <div className="join-now-icon">
                    <a href="#" aria-label="Join the Wait!">
                        <img src={joinicon} />
                        <br/>
                        Join
                        <br/>
                        The
                        <br/>
                        Wait
                    </a>
                </div>

                <div className="rewards-icon">
                    <a href="#" aria-label="Ourstreet Rewards!">
                        <img src={rewardsicon} />
                        <br/>
                        OurStreet
                        <br/>
                        Rewards
                    </a>
                </div>

                <div className="happy-hour-icon">
                    <a href="#" aria-label="Happy Hour!">
                        <img src={happyhouricon} />
                        <br/>
                        Happy
                        <br/>
                        Hour
                    </a>
                </div>

                <div className="beer-icon">
                    <a href="#" aria-label="Beer Card">
                        <img src={beericon} />
                        <br/>
                        Beer
                        <br/>
                        Card
                    </a>
                </div>

                <div className="menu-icon">
                    <a href="#" aria-label="Preview Menu">
                        <img src={happyhouricon} />
                        <br/>
                        Printable
                        <br/>
                        Menu
                    </a>
                </div>

                <div className="gluten-icon">
                    <a href="#" aria-label="Gluten menu">
                        <img src={happyhouricon} />
                        <br/>
                        Gluten
                        <br/>
                        Menu
                    </a>
                </div>

                <div className="apply-now-icon">
                    <a href="#" aria-label="Apply to work here!">
                        <img src={happyhouricon} />
                        <br/>
                        Apply
                        <br/>
                        Now
                    </a>
                </div>
            </div>
        </div>
    );
}

