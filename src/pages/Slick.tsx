import slide1 from "../assets/Images/slick/slide1.png";
import slide2 from "../assets/Images/slick/slide2.png";
import slide3 from "../assets/Images/slick/slide3.png";
import slide4 from "../assets/Images/slick/slide4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Slick() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slideToScroll: 1,
    autoplay: true,
    autospeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="h-40 overflow-hidden md:h-80">
      <Slider {...settings}>
        <div>
          <h3>
            <img src={slide1} alt="image" className="h-40 w-full md:h-80" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={slide2} alt="image" className="h-40 w-full md:h-80" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={slide3} alt="image" className="h-40 w-full md:h-80" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={slide4} alt="image" className="h-40 w-full md:h-80" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}
