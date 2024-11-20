import React from 'react'
import './BannerA.css'
import logo from '../../assets/logo.png'

export default function BannerA() {
    return (
        <>
            <div className="banner">


                <div className='image-container'>
                    <div className="image-container-box">
                        <img
                            className="main-image"
                            src="https://res.cloudinary.com/dtxch3puy/image/upload/v1732098254/friends-laughing-using-mobiles_2_rbglmi.png" // Replace with your actual image URL
                            alt="Couple using app"
                        />
                        
                    </div>
                    
                </div>
                <div className="text-container">
                    <h1>
                        <img src={logo} alt="" />
                        ing  is more
                    </h1>
                    <div className='highlight'>
                        <p>
                            Personalised </p> <span>&nbsp; & Instant</span>
                        
                    </div>

                    <p>Download the Order.uk app for faster ordering</p>
                    <div className="app-links">
                        <img
                            src="https://res.cloudinary.com/dtxch3puy/image/upload/v1732098346/app-store-badges-en_1_b2mt8h.png"
                            alt="Google Play"
                        />

                    </div>
                </div>

            </div>

        </>
    )
}
