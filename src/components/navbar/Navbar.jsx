import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {


    const [active, setActive] = useState(false);
    const [open , setOpen] = useState(false);

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
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to ="/" className="link">
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
                                    <span>Gigs</span>
                                    <span>Add New Gig</span>
                                </>
                            )}
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                            </div>}
                        </div>
                    )}
                </div>
            </div>

            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test1</span>
                        <span>Test2</span>
                    </div>
                </>
            )}
        </div>
    );
};
export default Navbar;
