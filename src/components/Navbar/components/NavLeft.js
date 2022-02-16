import React from 'react';
import DarkMode from "./Darkmode";
import NavText from "./NavText";

const NavLeft = () => {
    return (
        <div className={'flex space-x-4'}>
            <NavText text={'about'} />
            <NavText text={'cv'}/>
            <DarkMode />
        </div>
    );
};

export default NavLeft;
