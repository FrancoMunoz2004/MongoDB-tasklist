import { Navigate,Outlet } from "react-router-dom";

export const RouteProtectedIsLogin =({isAllowed, children,redirectTo='/User'})=>{
    if (isAllowed) {
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>;
}