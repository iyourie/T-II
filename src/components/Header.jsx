import image from '../img/favicon.ico'

function Header() {
    return (
        <header>
            <div className="container">
                <img src={image} alt="" />
                <ul>
                    <li>home</li>
                    <li>services</li>
                    <li>portfolio</li>
                    <li>about</li>
                    <li>pricing</li>
                    <li>contact</li>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                </ul>
            </div>
        </header>
    )
}
export default Header