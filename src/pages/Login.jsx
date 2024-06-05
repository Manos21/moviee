import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className="login-container">
            
            <Link 
                to="/"   
            >
                <img src="src\assets\logo.svg" alt="home" />
            </Link>           
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="hd-lg">Login</h2>
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button
                >
                    Login to your account
                </button>
                <div className="sign-choice bd-md">
                    <p>Don't have an account?</p>
                    <button className="sign">Sign Up</button>
                </div>
            </form>
        </div>
    )

}