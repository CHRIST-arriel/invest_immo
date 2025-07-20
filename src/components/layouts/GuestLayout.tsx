import type  {  PropsWithChildren } from 'react'
import '../../style/guest.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpeg'
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa6";





export default function Guest({children} : PropsWithChildren) {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
        const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <>
    <div className='guestMain'>
        <header>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className={`navbar ${isMenuOpen ? 'show' : '' }`} >
                <nav>
                    <ul>
                        <li> <Link to="/">Accueil</Link> </li>
                        <li> <Link to="/About">A propos</Link></li>
                        <li> <Link to="/Service">Services</Link></li>
                        <li> <Link to="/Contact">Contact</Link></li>
                    </ul>
                    <div className='reseau'>
                        <ul>
                            <li className='icon'><FaFacebookF /></li>
                            <li className='icon'><FaInstagram /></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="btnopen" onClick={handleToggleMenu}> {isMenuOpen ? <IoMdClose /> :<IoMenu />}</div>
        </header>
      
    </div>
    <div className='children'>
            {children}
        </div>
    </>
  )
}


