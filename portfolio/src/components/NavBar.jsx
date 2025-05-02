import './NavBar.css'
import { useState } from 'react';

function NavBar(){

    const [toggle, setToggle] = useState(false)

    return(
        <>
            <header className="wrapper">
                <div className="navbar">
                    <h1>Arthur</h1>
                    <div className="menu" onClick={()=>setToggle(!toggle)}><i class="ri-menu-3-fill"></i></div>
                    <div className={`navbar_back ${toggle ? "active" : ""}`}>
                        <nav className={`nav ${toggle ? "active" : ""}`}>
                            <a href="#">Main</a>
                            <a href="#">My Projects</a>
                            <a href="#">About Me</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;