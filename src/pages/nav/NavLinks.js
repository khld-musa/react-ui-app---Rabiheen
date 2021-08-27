import React from "react";

function NavLinks(props) {

  return (

      <nav>


        <ul>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a class="nav-link scrollto" href="#hero">Home</a>
          </li >

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a class="nav-link scrollto" href="#about">About</a>
          </li>

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a class="nav-link scrollto" href="#gallery">Gallery</a>
          </li>

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a class="nav-link scrollto " href="#team">Our team</a>
          </li>

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a class="nav-link scrollto" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
  );
}

export default NavLinks;