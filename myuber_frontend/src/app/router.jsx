import {BrowserRouter, useRoutes} from "react-router-dom";
import routes from "./routes";

const RouterContent = ()=>{

    return useRoutes(routes);
}

const AppRouter = ()=>{
    <BrowserRouter>
        <RouterContent/>
    </BrowserRouter>
}

export default AppRouter;