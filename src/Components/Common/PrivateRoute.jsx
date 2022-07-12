import { Navigate, Route } from 'react-router-dom'

export const PrivateRoute = (props) => {
    const isLoggedIn = Boolean(localStorage.getItem('token'))
    if(!isLoggedIn) return <Navigate to='/login' replace/>

    return <Route {...props} />
}
