import { useState } from "react"

export const User = () => {
    const [user, setUser] = useState<AuthUser| null>(null)
    const loginHdl = () => {
        setUser({
            name: 'Clark',
            email: 'e@example.com'
        })
    }
    const logoutHdl = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={loginHdl}>Login</button>
            <button onClick={logoutHdl}>Logout</button>
            <div>{user?.name}</div>
        </div>
    )
}

type AuthUser = {
    name: string,
    email: string
}