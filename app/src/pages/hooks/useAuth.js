import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const verifyAuth = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/verify", {
        withCredentials: true,
      });
      console.log("Response data:", response.data);
      setIsAuthenticated(response.data.status);
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return { isAuthenticated, verifyAuth };
};
