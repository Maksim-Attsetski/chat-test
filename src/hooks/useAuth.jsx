import {useEffect, useMemo, useState} from 'react'
import {onAuthStateChanged, updateProfile} from 'firebase/auth'
import {collection, addDoc} from 'firebase/firestore'

import { logout, firebaseAuth, register, login, fs } from '../firebase'

const useAuth = () => {
    const [user, setUser] = useState(null)
    const [isUserLoading, setIsUserLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user || null)
            setIsUserLoading(false)
        })
    }, [user, isUserLoading])

    const userFuncs = useMemo(() => {
        const handleRegister = async (email, pass) => {
            setIsUserLoading(true)

            try {
                const { user: data } = await register(email, pass);
                addDoc(collection(fs, 'users'), {
                    uid: data.uid,
                    displayName: 'Без имени',
                    email,
                });

                updateProfile(data, {
                    displayName: 'Без имени',
                });
            } catch (error) {
                console.log(error);
            } finally {
                setIsUserLoading(false)
            }
        }
       const handleLogin = async (email, pass) => {
        setIsUserLoading(true)

        try {
            login(email, pass)
        } catch (error) {
            console.log(error);
        } finally {
            setIsUserLoading(false)
        }
    }

       const handleLogout = async () => {
            logout()
       }
       
        return {
            handleRegister,
            handleLogout, 
            handleLogin
        }
    }, [])

    return {
        handleRegister: userFuncs.handleRegister,
        handleLogout: userFuncs.handleLogout, 
        handleLogin: userFuncs.handleLogin,
        isUserLoading,
        user,
    }
}
export default useAuth;