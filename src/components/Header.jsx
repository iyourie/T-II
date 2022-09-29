import { useState } from 'react'
import image from '../img/favicon.ico'

function Header() {
    //display or hide other links
    function otherLinks(e) {
        e.preventDefault()
        document.querySelector('.menu').classList.toggle('active')
    }

    const [id, setId] = useState('')
    return (
        <header id='header'>
            <div className="container">
                <img src={image} alt="" />
                <ul>
                    <li><a href={id} onClick={() => { setId('#articles') }}>Articles</a></li>
                    <li><a href={id} onClick={() => { setId('#gallery') }}>Gallery</a></li>
                    <li><a href={id} onClick={() => { setId('#features') }}>Features</a></li>
                    <li><a href='' onClick={otherLinks}>Other Links</a></li>
                </ul>
            </div >
        </header >
    )
}
export default Header