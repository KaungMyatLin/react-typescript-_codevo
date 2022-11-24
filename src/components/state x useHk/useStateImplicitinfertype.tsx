import { useState } from 'react'
export const LoggedIn = () => {
    // useState infers type 'boolean' from false.
    // esp. setting state, only 'bool', no 0 or string allowed.
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