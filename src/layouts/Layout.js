import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;