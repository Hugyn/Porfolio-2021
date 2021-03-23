import React from 'react'
import './NavbarMobile-styles.css'

function NavbarMobile() {
    return (
        <div>
             <div className='navBar'>
            <li className='active'><span className='innerSpan'>HOME</span></li>
            <li><span className='innerSpan'>ABOUT</span></li>
            <li><span className='innerSpan'>PROJECTS</span></li>
            <li><span className='innerSpan'>CONTACT</span></li>
        </div>
        </div>
    )
}

export default NavbarMobile
