import { useState } from 'react'
export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const loginHdl = () => {
        setIsLoggedIn(true)
    }
    const logoutHdl = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={loginHdl}>Login</button>
            <button onClick={logoutHdl}>Logout</button>
        </div>
    )
}