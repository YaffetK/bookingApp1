import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div>
            <nav className=' flex font-bold p-10 border bg-amber-200 mb-2'>
                <ul className=' text-black flex justify-evenly flex-row gap-10 ml-20 w-screen'>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
