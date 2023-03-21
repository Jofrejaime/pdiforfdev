import { useContext } from "react"
import { UserContext } from "../../UserContext"
import Descover from "../Discover/Discover";
 const ProtectedRoute = ({children})=>{
  const {login} = useContext(UserContext);

 if(login)
 return children
 else return<Descover/>
}
export default ProtectedRoute;