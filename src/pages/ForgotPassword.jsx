import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

function ForgotPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/forgot-password", {
                email
            });

            alert(response.data);

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Unable to send reset email.");

        }

    };

    return (

        <div className="loginPage">

            <div className="loginCard">

                <h1>Forgot Password</h1>

                <p>Enter your registered email.</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="loginBtn"
                    >
                        Send Reset Link
                    </button>

                </form>

            </div>

        </div>

    );

}

export default ForgotPassword;