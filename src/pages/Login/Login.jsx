import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Art from '../../assets/Art.png'
import './Login.css'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>


            <div className="container">
                {/* Left Section */}
                <div className="left-section">
                    <div className='left-section-inner'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <h1 className="heading">
                            Welcome Back <span className="emoji">👋</span>
                        </h1>
                        <p className="paragraph">
                            Today is a new day. It’s your day. You shape it. Sign in to start
                            ordering.
                        </p>
                        <form className="form">
                            <label className="label">Email</label>
                            <input type="email" placeholder="Example@email.com" className="input" />
                            <label className="label">Password</label>
                            <input
                                type="password"
                                placeholder="At least 8 characters"
                                className="input"
                            />
                            <div className="forgot-password">
                                <a href="#" className="link">
                                    Forgot Password?
                                </a>
                            </div>
                            <button type="submit" className="button">
                                Sign in
                            </button>
                        </form>
                        <p className="sign-up-text">
                            Don’t you have an account?{" "}
                            <a href="#" className="sign-up-link">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
                {/* Right Section */}
                <div className="right-section">
                    <img
                        src={Art}
                        alt="Food"
                        className="image"
                    />
                </div>
            </div>


        </>
    )
}
