import { useContext } from "react"
import { Navigate, Outlet, Route } from "react-router-dom";
import { UserContext } from "../../UserContext"

 const ProtectedRoute = (props)=>{
  const {login} = useContext(UserContext);
 
 return(
  login !== true ? <Navigate to='/discover'/> :<Outlet/>
 )
}
export default ProtectedRoute;