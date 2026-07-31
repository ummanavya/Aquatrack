import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

function ResetPassword() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const email = searchParams.get("email");

    const [newPassword, setNewPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/reset-password", {

                email,
                newPassword

            });

            alert(response.data);

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Password reset failed.");

        }

    };

    return (

        <div className="loginPage">

            <div className="loginCard">

                <h1>Reset Password</h1>

                <p>Create your new password.</p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="loginBtn"
                    >
                        Update Password
                    </button>

                </form>

            </div>

        </div>

    );

}

export default ResetPassword;