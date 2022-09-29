import image from '../img/landing-image.png'

function Landing() {
    return (
        <div className="landing">
            <div className="container">
                <div className="text">
                    <h1>Welcome to Iyourie World</h1>
                    <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Landing