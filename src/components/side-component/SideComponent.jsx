import React from 'react'
import './SideComponent-styles.css'

function SideComponent() {
    return (
        <div className='sideComponent'>

            <h1 className='hugo-nathan'><span className='huna'>HU</span>GO <br/> <span className='huna'>NA</span>THAN</h1>

            <p className='fullStackDev'>FULL STACK DEV</p>

            <div className='socialMedia'>
                <li className='fab fa-github'><span className='socialMediaName'>GITHUB</span></li>
                <li className='fab fa-linkedin-in'><span className='socialMediaName'>LINKEDIN</span></li>
                <li className='fab fa-instagram'><span className='socialMediaName'>INSTAGRAM</span></li>
            </div> 
        </div>
    )
}

export default SideComponent;