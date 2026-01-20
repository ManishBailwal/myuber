import MainLayout from '../layouts/MainLayout.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';
import LoginPage from "../features/auth/pages/LoginPage.jsx";

import {ProtectedRoute} from "../features/auth/components/ProtectedRoute.jsx"
const routes  = [

    {
        element: <AuthLayout/>,
        children:[
            {path:"/login", element: <LoginPage/>}
        ]
    },{
        element: <ProtectedRoute/>,
        children:[
            {
                 element: <MainLayout/>,
                 children:[
                    // {index:true, element:<DashboardPage/>},
                    //  {path:"/dashboard", element:<DashboardPage/>},
                    //  {path:"/trips", element:<TripListPage/>},

                 ]

            }
           
        ]
    }
]

export default routes;