"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import api from "@/lib/axios";
import { NextResponse } from "next/server";

interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    user: object | null;
    signup: ({email, fullname, password}:{email: string,fullname:string, password: string}) => Promise<NextResponse>;
    login: ({email, password}:{email: string, password: string}) => Promise<NextResponse>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<object | null>(null);
  

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser){
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
    }else{
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
    }
  },[]);

  const login = async({email, password}:{email: string, password: string})=>{
    const response = await api.post("/auth/login", {email, password});
    if (response.status === 200){
        if(response.data.type === "success"){
            const {token, user} = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setToken(token);
            setUser(user);
            setIsAuthenticated(true);
            return NextResponse.json({message: "Login successful", token:token, user:user}, {status: 200});
        }else{
            return NextResponse.json({message: response.data.message}, {status: 400});
        }
    }else{
        return NextResponse.json({message: "Login failed"}, {status: 401});
    }
  }

  const signup = async({email,fullname, password}:{email: string,fullname:string, password: string})=>{
    const response = await api.post("/auth/signup", {email, fullname, password});
    if (response.status === 200){
        if(response.data.type === "success"){
            const {token, user} = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setToken(token);
            setUser(user);
            setIsAuthenticated(true);
            return NextResponse.json({message: "Signup successful", token:token, user:user}, {status: 200});
        }else{
            return NextResponse.json({message: response.data.message}, {status: 400});
        }
    }else{
        return NextResponse.json({message: "Signup failed"}, {status: 401});
    }
  }
  

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user,login,signup }}>
      {children}
    </AuthContext.Provider>
  );

};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
}