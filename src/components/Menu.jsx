import imge from '../img/megamenu.png'

function Menu() {
    return (
        <div className="menu">
            <img src={imge} alt="" />
            <div className='links'>
                <span>
                    <i className="fa-regular fa-comments"></i>
                    <a href="">testimonials</a>
                </span>
                <span>
                    <i className="fa-regular fa-user"></i>
                    <a href="">team members</a>
                </span>
                <span>
                    <i className="fa-regular fa-building"></i>
                    <a href="">services</a>
                </span>
                <span>
                    <i className="fa-regular fa-circle-check"></i>
                    <a href="">our skills</a>
                </span>
                <span>
                    <i className="fa-regular fa-clipboard"></i>
                    <a href="">how it works</a>
                </span>
            </div>
            <div className='links'>
                <span>
                    <i className="fa-solid fa-calendar-days"></i>
                    <a href="">events</a>
                </span>
                <span>
                    <i className="fa-solid fa-server"></i>
                    <a href="">pricing plans</a>
                </span>
                <span>
                    <i className="fa-regular fa-circle-play"></i>
                    <a href="">top videos</a>
                </span>
                <span>
                    <i className="fa-solid fa-chart-line"></i>
                    <a href="">stats</a>
                </span>
                <span>
                    <i className="fa-solid fa-percent"></i>
                    <a href="">request a discount</a>
                </span>
            </div>
        </div>
    )
}
export default Menu