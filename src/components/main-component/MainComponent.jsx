import React from 'react'
import './MainComponent-styles.css'
import NavbarComponent from './nav-bar/NavbarComponent'
import AboutComponent from './pages/about/AboutComponent'
function MainComponent() {
    return (
        <div className='mainComponent'>
            <NavbarComponent />
            <AboutComponent/>
        </div>
    )
}

export default MainComponent;
