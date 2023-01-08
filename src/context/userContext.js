import { useContext, createContext } from "react"
import { useState } from "react"

const initialState = {
    user : {},
    login: () => null,
    logout: () => null
}

const UserContext = createContext(initialState)
const useUser = () => useContext(UserContext)

const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialState.user)

    const login = async (username,password) => {

        const result = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(json => {
            setUser(json.token)
            return true
        })
        .catch(()=>{
            return false
        })

        return result
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export {useUser, UserProvider}