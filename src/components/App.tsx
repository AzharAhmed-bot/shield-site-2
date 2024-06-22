import Home from "./Hero/Home";
import Program from "./Programs/Program";
import Project from "./Projects/Project";
import Partners from "./Partners/Partners";
import AboutUs from "./about/AboutUs";
import Payment from "./payment/Payment";
import ComingSoon from "./payment/ComingSoon";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar";




function App() {
    const routes = [
        { component: <Home />, path: "/" },
        { component: <Program />, path: "/programs" },
        {component:<Project/> , path :"/projects"},
        { component: <AboutUs />, path: "/about" },
        { component: <ComingSoon />, path: "/payment" },
        { component:<Partners/>, path:'/partners'}
        
    ];


    return (
        <>
            <Navbar />
            <Payment />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>
        </>
    );
}

export default App;
