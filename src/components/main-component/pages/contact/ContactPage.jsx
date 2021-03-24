import React from 'react'
import './ContactPage-styles.css'

function ContactPage() {
    return (
        <div className='contact-container'>
            <h1>GET IN <br/>TOUCH</h1>
            <p>LET'S TALK! GET IN TOUCH IF YOU WANT TO BUILD SOMETHING TOGETHER, HAVE AN OFFER OR ANY QUESTIONS</p>
            <form className='contact-form'>
                <input type='text' placeholder='YOUR NAME'/>
                <input type='email' placeholder='YOUR EMAIL'/>
                <textarea placeholder='YOUR MESSAGE'/>
            </form>
        </div>
    )
}

export default ContactPage;
