import { useContext } from "react"
import { UserContext } from "../../UserContext"
import Discover from "../Discover/Discover";
 const ProtectedRoute = ({children})=>{
  const {login} = useContext(UserContext);

 if(login)
 return children
 else return<Discover/>
}
export default ProtectedRoute;