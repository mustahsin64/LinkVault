// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";



const AuthContext = React.createContext(null)

export function useAuth(){
    return useContext(AuthContext)
}
function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
        })

        return unSubscribe;
    }, [])
    
    const value = {
        currentUser,
        signup,
    }

    /**
     * @param {string} email
     * @param {string} password
     * @param {string} username
     */
    async function signup(email, password, username){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>{
            // Signed up 
            const user = userCredential.user;
            // update username
            updateProfile(user,{
                displayName: username,
                photoURL: "https://unsplash.com/photos/silhouette-photo-of-man-on-cliff-during-sunset-_6HzPU9Hyfg"
            }).then(() => {
                // Profile updated!
                const updatedUser = auth.currentUser
                // @ts-ignore
                setCurrentUser(updatedUser);
                return updatedUser;
              }).catch((error) => {
                // An error occurred
                // ...
                console.log("error updating profile " + error);
                return null;
              });

        }).catch((error) =>{
            console.log("error Signing up " + error);
            return null;
        });

    }

  return (
    <AuthContext.Provider 
    value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
