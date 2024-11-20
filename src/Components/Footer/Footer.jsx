import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/logo2.png'
import playstore from '../../assets/playstore.png'
import snapchat from '../../assets/Snapchat.png'
import insta from '../../assets/Instagram.png'
import tiktok from '../../assets/TikTok.png'
import fb from '../../assets/Facebook.png'


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-section footer-top">
                    <div className="footer-brand">
                        <img src={footerLogo} alt="" />
                        <div className="footer-app-links">
                            <img src={playstore } alt="Apple Store" />

                        </div>
                        <p>Company # 490039-445, Registered with House of companies.</p>
                    </div>
                    <div className="footer-subscribe">
                        <h3>Get Exclusive Deals in your Inbox</h3>
                        <div className="subscribe-box">
                            <input type="email" placeholder="youremail@gmail.com" />
                            <button>Subscribe</button>
                        </div>
                        <p>
                            we won’t spam, read our <a href="/email-policy">email policy</a>
                        </p>
                        <div className="social-links">
                            <img src={fb} alt="" />
                            <img src={insta} alt="" />
                            <img src={tiktok} alt="" />
                            <img src={snapchat} alt="" />
                            
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="legal-pages">
                            <h4>Legal Pages</h4>
                            <ul>
                                <li><a href="/terms">Terms and Conditions</a></li>
                                <li><a href="/privacy">Privacy</a></li>
                                <li><a href="/cookies">Cookies</a></li>
                                <li><a href="/slavery">Modern Slavery Statement</a></li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className="footer-links">
                    <div className="legal-pages">
                            <h4>Important Links</h4>
                            <ul>
                                <li><a href="/help">Get Help</a></li>
                                <li><a href="/add-restaurant">Add your Restaurant</a></li>
                                <li><a href="/sign-up">Sign up to Deliver</a></li>
                                <li><a href="/business-account">Create a Business Account</a></li>
                            </ul>
                            </div>
                        </div>
                </div>
                
            </footer>
            <div>
            <div className="footer-bottom">
                <div className="footer-bottom-content-left">
                    <p>
                        Order.uk Copyright 2024, All Rights Reserved.
                    </p>
                    </div>
                    <div className='footer-bottom-content-right'>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/personal-data">Do not sell or share my personal information</a></li>
                    </ul>
                    </div>
                </div>
            </div>


        </>
    )
}
