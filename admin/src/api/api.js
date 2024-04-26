import axios from "axios";
import { resources } from "./resources";

export const api = axios.create(
    {
        baseURL: 'http://localhost:8080/api',
        headers: { 
            'Content-Type': 'application/json',
        }
    }
)

export const setAuthorizationToken = (token) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const revokeAUthorization = async () => {
    try {
        const { data } = await api.get(resources.logoutUrl);
        return data
    } catch (error) {
        console.log(error)
    }
}


    // const logout = () => {
    //     localStorage.removeItem('user')
    //     setUser(null)
    //     navigate('/login')
    // }

     // return (
    //     <AuthContext.Provider value={{ user, login, logout }}>
    //         { children }
    //     </AuthContext.Provider>
    // )

    // import React, { useContext, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from "./AuthProvider";

// export const useRequireAuth = () => {
//   const { authenticated, loading } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading && !authenticated) {
//       navigate('/login');
//     }
//   }, [authenticated, loading, navigate]);

//   return { authenticated, loading };
// };