import { useState } from 'react'
import image from '../img/favicon.ico'

function Header() {
    const [id, setId] = useState('')
    return (
        <header id='header'>
            <div className="container">
                <img src={image} alt="" />
                <ul>
                    <li><a href={id} onClick={() => { setId('#articles') }}>Articles</a></li>
                    <li><a href={id} onClick={() => { setId('#gallery') }}>Gallery</a></li>
                    <li><a href={id} onClick={() => { setId('#features') }}>Features</a></li>
                    <li><a href={id} onClick={() => { setId('#otherLinks') }}>Other Links</a></li>
                </ul>
            </div >
        </header >
    )
}
export default Header