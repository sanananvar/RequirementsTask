import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/User/Home/Home";
import UserRoot from "../Pages/User/UserRoot";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import AddRequirement from "../Pages/Admin/Add/Add";
import Wishlist from "../Pages/User/Wishlist/Wishlist";

const routes = createBrowserRouter(
    [
        {
            path:"",
            element:<UserRoot/>,
            children:[
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"Wishlist",
                    element:<Wishlist/>
                }
                
            ]
        },{
            path:"/admin",
            element:<AdminRoot/>,
            children:[
                {
                    path:"",
                    element:<Dashboard/>
                },
                {
                    path:"Add",
                    element:<AddRequirement/>
                }
            ]
        }
    ]
)
export default routes