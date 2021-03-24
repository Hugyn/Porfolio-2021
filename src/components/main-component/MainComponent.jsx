import React from 'react'
import './MainComponent-styles.css'
import NavbarComponent from './nav-bar/NavbarComponent'
import ContactPage from './pages/contact/ContactPage'

function MainComponent() {
    return (
        <div className='mainComponent'>
            <NavbarComponent />
            <div className="content">
                <ContactPage />
            </div>
        </div>
    )
}

export default MainComponent;
