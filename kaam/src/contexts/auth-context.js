import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebaseConfig"

const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthContextProvider= ( {children} ) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true)

    function login() {
        signInWithPopup(auth, provider).then(() => {
            console.log("signed up successfully")
            window.location.href = "/";
        }).catch(e => console.log(e))
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            const unsubscribe = setCurrentUser(user)
            setAuthLoading(false)
            return unsubscribe;
            })
    }, [])

    const value = {
        currentUser,
        login: login,
    }
    return <AuthContext.Provider value={value}>
        {!authLoading && children}
    </AuthContext.Provider>
}

export default AuthContextProvider;