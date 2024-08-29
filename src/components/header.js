import images from "../images/exporting";

const Header = () => {
    return(
        <>
        <div className="header-father">
            <div className="header-flex-son">
                <div className="cinema-pic-box">
                    <img src={images.cines} alt="cine" loading="lazy" className="cinema-pic"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header