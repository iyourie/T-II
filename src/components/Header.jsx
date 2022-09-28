import { useState } from 'react'
import image from '../img/favicon.ico'

function Header() {
    const [id, setId] = useState('')
    return (
        <header>
            <div className="container">
                <img src={image} alt="" />
                <ul>
                    <li><a href={id} onClick={() => setId('#home')}> home</a></li>
                    <li><a href={id} onClick={() => setId('#services')}>services</a> </li>
                    <li><a href={id} onClick={() => setId('#portfolio')}>portfolio</a></li>
                    <li><a href={id} onClick={() => setId('#about')}>about</a></li>
                    <li><a href={id} onClick={() => setId('#pricing')}>pricing</a></li>
                    <li><a href={id} onClick={() => setId('#contact')}>contact</a></li>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                </ul>
            </div>
        </header>
    )
}
export default Header