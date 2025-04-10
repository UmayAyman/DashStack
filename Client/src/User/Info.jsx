import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../redux/authSlice";
import "./Info.css";

const User = () => {
    const [formType, setFormType] = useState("login");
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [protectedData, setProtectedData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (storedUser) {
            setLoggedInUser(storedUser);
            fetchProtectedData();
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            if (formType === "signup") {
                const response = await fetch("http://localhost:3000/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.message);

                alert("Account created successfully!");
                setFormType("login");

            } else if (formType === "login") {
                const response = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.message);

                localStorage.setItem("token", data.token);
                localStorage.setItem("loggedInUser", JSON.stringify(data.user));

                dispatch(login());
                setLoggedInUser(data.user);
                alert("Logged in successfully!");
                fetchProtectedData();
                navigate("/");

            }
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchProtectedData = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("No token found!");
                return;
            }

            const response = await fetch("http://localhost:3000/protected", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            setProtectedData(data);
        } catch (error) {
            console.error("Error fetching protected data:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        dispatch(logout());
        setLoggedInUser(null);
        setProtectedData(null);
        setFormType("login");
    };

    if (loggedInUser) {
        return (
            <div className="user-details">
                <h1 style={{ textAlign: "center" }}>Welcome, {loggedInUser.name}!</h1>
                {protectedData && (
                    <div>
                        <h3>Protected Data:</h3>
                        <pre>{JSON.stringify(protectedData, null, 2)}</pre>
                    </div>
                )}
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <div className="form-container">
                {formType === "login" && (
                    <form onSubmit={handleSubmit}>
                        <h1>Login to Account</h1>
                        <p>Please enter your email and password to continue </p>
                        {error && <p className="error-message">• {error}</p>}
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" value={formData.email} onChange={handleChange} />
                        <div className="password-container">
                            <label htmlFor="password">Password</label>
                        <a onClick={() => setFormType("forgot")} className="forgot-password">Forget password?</a>
                        </div>
                        <input type="password" id="password" name="password" placeholder="● ● ● ● ● ●" value={formData.password} onChange={handleChange} />

                        <div className="checkbox-container">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Password</label>
                        </div>

                        <button className="signin" type="submit"style = {{marginTop: "20px"}}>Sign In</button>
                        <p className="switch-form" style = {{fontSize: "12px"}}>Don't have an account? <span onClick={() => setFormType("signup")}>Create account</span></p>
                    </form>
                )}

                {formType === "signup" && (
                    <form onSubmit={handleSubmit}>
                        <h1>Create an Account</h1>
                        <p>Create a account to continue</p>
                        {error && <p className="error-message">• {error}</p>}
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" value={formData.email} onChange={handleChange} />
                        <label htmlFor="userName">Username</label>
                        <input type="text" id="userName" name="userName" placeholder="Username" value={formData.userName} onChange={handleChange} />
                        <div className="password-container">
                            <label htmlFor="password">Password</label>
                        <a onClick={() => setFormType("forgot")} className="forgot-password">Forget password?</a>
                        </div>
                        <input type="password" id="password" name="password" placeholder="● ● ● ● ● ●" value={formData.password} onChange={handleChange}/>
                        <div className="checkbox-container">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">I accept terms and conditions</label>
                        </div>

                        <button className="signup" type="submit" style = {{marginTop: "20px"}}>Sign Up</button>
                        <p className="switch-form" style = {{fontSize: "12px"}}>Already have an account? <span onClick={() => setFormType("login")}>Login</span></p>
                    </form>
                )}
                {formType === "forgot" && (
                    <form onSubmit={handleSubmit}>
                        <h1 style = {{marginBottom: "30px"}}>Forgot Password</h1>
                        {error && <p className="error-message">• {error}</p>}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="johndoe@gmail.com"
                            onChange={handleChange}
                        />
                        <button type="submit">Reset Password</button>
                        <p className="switch-form" style = {{fontSize: "12px"}}> Back to Login <span onClick={() => setFormType("login")}>Login</span></p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default User;