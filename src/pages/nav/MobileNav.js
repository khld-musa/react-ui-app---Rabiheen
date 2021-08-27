import NavLinks from "./NavLinks";
import './Nav.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {CgClose} from 'react-icons/cg'
import {useState} from 'react';



function MobileNav () {

  const [show, setShow] = useState(false) 
  const openIcons = <AiOutlineMenu className="hamburger"  size='40px' color='white'

                         onClick={() => setShow(!show)}

                        />
  const closeIcons =  <CgClose className="hamburger"  size='40px' color='white'

                         onClick={() => setShow(!show)}

                        />       
                        
  const closeMobileMenu = () => setShow(false);                      

  return (

    <nav className="MobileNav">

      {show ? closeIcons : openIcons}

     {show && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/> }

     </nav>
  )
}

export default MobileNav;