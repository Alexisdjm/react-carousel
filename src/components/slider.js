import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from '../images/exporting';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1351 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1350, min: 901 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 900, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
    };

    const texts = {
        text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fames massa maximus malesuada mus conubia. Primis eleifend nec. Scelerisque cubilia mi; enim sodales pellentesque efficitur. Purus sapien facilisi tellus. Non ornare taciti pretium. Tortor nec vel arcu."
    }

    const Card = ({image, text, nameimage}) => {
        return (
            <>
                <div className='card-container'>
                    <img src={image} alt='img' loading='lazy' className='movie-pic'></img>
                    <div className='card-description'>
                        <img src={nameimage} className='name--pic' alt='name-pic' loading='lazy'></img>
                        <p>{text}</p>
                    </div>
                </div>
            </>
        )
    }

    const ButtonGroup = ({ next, previous }) => {
        return (
            <>
                <button className="custom-btn right" onClick={() => previous()} >
                    <img className='arrow-pic' src={images.prev} alt='prev' loading='lazy'></img>
                </button>
                <button className='custom-btn left' onClick={() => next()} >
                    <img className='arrow-pic' src={images.next} alt='next' loading='lazy'></img>
                </button>
            </>
          
        );
      };
    return (
        <>
        <div className='slider-father'>
            <div className='slider-son'>
                <div className='slider-main--box'>
                    <Carousel 
                    ssr={true} 
                    arrows={false}
                    infinite={true} 
                    autoPlay={true} 
                    draggable={true} 
                    autoPlaySpeed={3000} 
                    responsive={responsive} 
                    renderButtonGroupOutside={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]} 
                    customButtonGroup={<ButtonGroup />}>
                        <Card image={images.alien} text={texts.text} nameimage={images.alientitle}/>
                        <Card image={images.deadpool} text={texts.text} nameimage={images.deadpooltitle}/>
                        <Card image={images.borderlands} text={texts.text} nameimage={images.borderlandstitle}/>
                        <Card image={images.crow} text={texts.text} nameimage={images.crowtitle}/>
                        <Card image={images.harry} text={texts.text} nameimage={images.harrytitle}/>
                        <Card image={images.villano} text={texts.text} nameimage={images.villanotitle}/>                       
                    </Carousel>
                </div>
            </div>
        </div>
        </>
    )
}

export default Slider