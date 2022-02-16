import React, { useEffect } from 'react';

const DarkMode = () => {
    useEffect(() => {
        if (localStorage.theme) {
            if (localStorage.theme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        } else {
            localStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'
        }
    }, [localStorage.theme])

    const toggleDarkMode = () => {
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        }
    }
    return (
        <div onClick={toggleDarkMode} className={''}>
            Dark
        </div>
    );
};

export default DarkMode;
