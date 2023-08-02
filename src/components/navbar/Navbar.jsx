import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {


    const [active, setActive] = useState(false);
    const [open , setOpen] = useState(false);
    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);

    };
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, [])


    const currentUser = {
        id: 1,
        username: "Motilonians",
        isSeller: true
    }


    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                <Link to="/" className="link">
                    <span className="text">fiverr</span>
                </Link>
                    <span className="dot">.</span>
                </div>
                <div className="link">
                    <span className="">Fiverr Business</span>
                    <span className="">Explore</span>
                    <span className="">English</span>
                    <span className="">Sign in</span>
                    {!currentUser?.isSeller && <span className="">Become a Seller</span>}
                    {!currentUser && <button className="">Join</button>}

                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="" alt="" />
                            <span>{currentUser?.username}</span>

                            {open && <div className="options">
                            {currentUser?.isSeller &&(
                                <>
                                    <Link className="link" to="/myGigs">Gigs</Link>
                                    <Link className="link" to="/add">Add New Gig</Link>
                                </>
                            )}
                            <Link className="link" to="/orders">Orders</Link>
                            <Link className="link" to="/messages">Messages</Link>
                            <Link className="link" to="/">Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>

            {(active || pathname!=="/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">Graphics & Design</Link>
                        <Link className="link" to="/">Video & Animation</Link>
                        <Link className="link" to="/">Writing & Translation</Link>
                        <Link className="link" to="/">AI Service</Link>
                        <Link className="link" to="/">Digital Marketing</Link>
                        <Link className="link" to="/">Music & Audio</Link>
                        <Link className="link" to="/">Programming & Tech</Link>
                        <Link className="link" to="/">Business</Link>
                        <Link className="link" to="/">Lifestyle</Link>   
                    </div>
                    <hr/>
                </>
            )}
        </div>
    );
};
export default Navbar;
