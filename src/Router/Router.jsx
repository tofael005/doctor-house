import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Components/Log-Reg/Login";
import Register from "../Components/Log-Reg/Register";
import CavityProtection from "../Pages/Shared/CavityProtection";
import CosmeticDentist from "../Pages/Shared/CosmeticDentist";
import OralSurgery from "../Pages/Shared/OralSurgery";
import MoreDetails from "../Pages/Shared/MoreDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/appointment",
                element: <Appointment/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/cavity-protection",
                element: <CavityProtection/>
            },
            {
                path: "/cosmetic",
                element: <CosmeticDentist/>
            },
            {
                path: "/oral-surgery",
                element: <OralSurgery/>
            },
            {
                path: "/more-details",
                element: <MoreDetails/>
            }

        ]
    }
])

export default router;