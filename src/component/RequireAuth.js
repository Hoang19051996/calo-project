import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const RequireAuth = ({children}) => {
    const user =  useSelector(state => state.global.user)
    if (user.username) {
        return children
    }

    return <Navigate to='/login' />
}