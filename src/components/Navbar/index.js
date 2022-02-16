import React from 'react';
import DarkMode from "./components/Darkmode";
import BackToHome from "./components/BackToHome";
import NavLeft from "./components/NavLeft";

const Navbar = () => {
    return (
        <div className={'fixed w-full uppercase bg-white dark:bg-darkBlue dark:text-white text-black p-4 text-white transition flex justify-between'}>
            <BackToHome />
            <NavLeft />
        </div>
    );
};

export default Navbar;
