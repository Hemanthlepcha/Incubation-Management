import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import caro from '../../../src/assets/mam.png';
import caro1 from '../../../src/assets/ashi.png';
import caro2 from '../../../src/assets/aumchi.png';


function LandingPage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Set the desired interval (in milliseconds)
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    // Start the automatic transition when the component mounts
    sliderRef.current.slickPlay();

    // Add scroll event listener for scroll-triggered animation
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // You can adjust this threshold to control when the animation starts
    const threshold = 400;
    
    if (scrollY > threshold) {
      // Add your animation logic here
      // For example, you can add a CSS class to your components to make them appear
    }
  };

  return (
    <div>
      <div className="w-full">
        <Slider ref={sliderRef} {...carouselSettings}>
          <div>
            <img
              src={caro1}
              alt="Slide 1"
              className="w-screen h-1/2 object-cover"
            />
          </div>
          <div>
            <img
              src={caro}
              alt="Slide 2"
              className="w-screen h-1/2 object-cover"
            />
          </div>
          <div>
            <img
              src={caro2}
              alt="Slide 2"
              className="w-screen h-1/2 object-cover"
            />
          </div>
        </Slider>
      </div>
      
      <div className="your-component" style={{ opacity: 0, transition: 'opacity 1s ease' }}>
        {/* Your component content */}
      </div>
    </div>
  );
}

export default LandingPage;
