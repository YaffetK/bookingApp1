import React from "react";

const Navbar = () => {
    return (

        <div>
            <nav className=' flex font-bold p-10 border bg-amber-200 mb-2'>
                <ul className=' text-black flex justify-evenly flex-row gap-10 ml-20 w-screen'>
                    <li>Home</li>
                    <li>About</li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
