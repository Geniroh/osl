import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { Result, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from "../services/auth.service";
import { setAuthorizationToken, revokeAUthorization } from "../api/api";
import { AUTH_TOKEN_KEY } from "../constants";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAuthUser = async () => {
            const token = localStorage.getItem(AUTH_TOKEN_KEY)
            setAuthorizationToken(token);
            try {
                const authUser = await AuthService.getAuthenticatedUser();
                setUser(authUser);
                setAuthenticated(true);
            } catch (error) {
                setAuthenticated(false);
            }
            setLoading(false);
        };

        getAuthUser();
    }, []);

    const login = (user) => {
        setLoading(true);
        setUser(user);
        setLoading(false);
    };

    const logout = useCallback(async () => {
        setLoading(true);
        try {
            setAuthorizationToken(null);
            await revokeAUthorization();
            setAuthenticated(false)
            setUser(null);
            localStorage.removeItem(AUTH_TOKEN_KEY);
            navigate('/login', { replace: true });
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setLoading(false);
        }
    }, [navigate]);


    const value = useMemo(() => ({ user, logout, login }), [user, logout, login]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen w-full bg-black/90">
                <Spin size="large" />
            </div>
        );
    }

    if (!authenticated || !user) {
        return (
            <Result
                status="403"
                title="Unauthorised Access"
                subTitle="Sorry, you are not authorized to access this page."
                extra={ 
                    <Link replace to="/login" className="border px-3 py-2 text-[14px] uppercase text-white bg-[#4193fd] hover:text-white hover:bg-[#7BB2F9]">
                        Login here
                    </Link>
                }
            />
        );
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  if(!AuthContext) {
      throw Error('useAuth can only be used with an AuthContextProvider')
  }

  return useContext(AuthContext)
}






