import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

//https://links.papareact.com/gi1
//https://links.papareact.com/6ff
//https://links.papareact.com/7ma

function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="https://links.papareact.com/gi1" alt="banner" />
        </div>
        <div>
          <img src="https://links.papareact.com/6ff" alt="banner" />
        </div>
        <div>
          <img src="https://links.papareact.com/7ma" alt="banner" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
