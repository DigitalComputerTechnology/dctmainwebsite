import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const authFirebase = getAuth();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(authFirebase, (user) => {
        setIsAuthenticated(!!user); // Set to true if user is logged in, false otherwise
      });
      return () => unsubscribe(); // Cleanup subscription on unmount
    }, [authFirebase]);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(authFirebase, email, password);
      setIsAuthenticated(true);
      console.log("Login Success!");
    } catch (error) {
      console.error('Error signing in: ', error);
      throw error; // Rethrow the error to handle it in the Login component
    }
  };

//   const login = () => {
//     setIsAuthenticated(true);
//   };

const logout = async () => {
    try {
      await signOut(authFirebase); // Sign out from Firebase
      setIsAuthenticated(false); // Update the authentication state
      console.log("Logout Success!");
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
