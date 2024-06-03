import Home from "./Hero/Home";
import Program from "./Programs/Program";
import AboutUs from "./about/AboutUs";
import Payment from "./payment/Payment";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";


function App() {
    const routes = [
        { component: <Home />, path: "/" },
        { component: <Program />, path: "/programs" },
        { component: <AboutUs />, path: "/about" },
        // { component: <PaymentInput />, path: "/payment" },
        
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
