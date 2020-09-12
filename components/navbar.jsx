import React from 'react';

//Stateless Functions Components
const NavBar = ({ totalCounters }) => {
    console.log("NavBar - Rendered");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            Navbar {" "}
            <span className="badge badge-pill badge-secondary">
                {totalCounters}
            </span>

        </nav>
    );

};

export default NavBar;