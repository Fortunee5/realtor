 import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import logo from '../assets/image/realestate.jpg';
import logossd from '../assets/image/prolo.jpg';
 export default function Header() {
    const [pageState, setPageState] = useState("Sign in");
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState("Profile")
            }else{
                setPageState("Sign in")
            }
        });
    }, [auth]);
    function pathMatchRoute(route){
        if(route == location.pathname){
            return true
        }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
          
            <img src={logossd} alt="logo" className="h-5 cursor-pointer" onClick={()=>navigate("/")}/>
          
            </div>

            <div>
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>

                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}onClick={()=>navigate("/offers")}>Shortlet</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/blogpost") && "text-black border-b-red-500"}`}onClick={()=>navigate("/blogpost")}>Blogs</li>

                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/about") && "text-black border-b-red-500"}`}onClick={()=>navigate("/about")}>about</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/contact") && "text-black border-b-red-500"}`}onClick={()=>navigate("/contact")}>contact</li>


                    {/* <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`}onClick={()=>navigate("/sign-in")}>{pageState}</li> */}
                    
                </ul>
            </div>
            
            
        </header>
    </div>
  )
}
