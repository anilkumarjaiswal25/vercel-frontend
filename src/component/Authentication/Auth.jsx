import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const authorizationToken = `Bearer ${token}`;
    const isLoggedIn = !!token;

    const storeTokenInLocalStorage = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            // ✅ Laravel ka sahi API URL yahan dalein
            const response = await fetch(`https://anil-jaiswal.onrender.com/api/user`, { 
            // const response = await fetch("http://localhost:8000/api/user", { 
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json", // Laravel ko batana padta hai ki hum JSON chahte hain
                    "Authorization": authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                // ✅ Laravel aksar pura user object direct bhejta hai ya 'user' key mein
                // Console check karke 'data.user' ya 'data' set karein
                setUser(data); 
                // console.log(data)
            } else {
                console.error("Authentication failed");
                LogoutUser(); // Agar token expire ho gaya ho
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, [token]);

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            storeTokenInLocalStorage,
            LogoutUser,
            user,
            authorizationToken,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};