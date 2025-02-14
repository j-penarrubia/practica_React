import React from 'react';

const TopNav = () => {
    return (
        <div className="topnav">
            <a>Botón 1</a>
            <a>Botón 2</a>
            <a>Botón 3</a>
            <a>Botón 4</a>
            <a className="split" href="#top">
                <img src="src/assets/Logo.png" alt="El loguico" />
            </a>
        </div>
    );
};

export default TopNav;