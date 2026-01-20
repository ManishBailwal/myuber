import {Outlet} from "react-router-dom"

export const AuthLayout = ()=>{

    return (
        <div style={{display:"grid", placeItems:"center", height:"100vh"}}>
            <Outlet/>
        </div>
    )
}