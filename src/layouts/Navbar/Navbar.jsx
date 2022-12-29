import React from 'react'
import LogoAstro from '/image/icons/astroLogo.png'
import { Link } from 'react-router-dom'
import NavbarStyle from "./NavbarStyle.module.css";

const Navbar = () => {
  return (
    <nav className={NavbarStyle.navbar}>
        <div className={NavbarStyle.logo}>
            <img src={LogoAstro} alt="" style={{ width:'50px', height:'50px' }} />
            <p>AstroWb</p>
        </div>
        <div className={NavbarStyle.list}>
            <ul>
                <li>
                    <Link className={NavbarStyle.link}>Home</Link>
                </li>
                <li>
                    <Link className={NavbarStyle.link}>Planets</Link>
                </li>
                <li>
                    <Link className={NavbarStyle.link}>About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar