import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-2" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image src="https://links.papareact.com/gi1" width={1600} height={600} alt="banner" />
        </div>
        <div>
          <Image src="https://links.papareact.com/6ff" width={1600} height={600} alt="banner" />
        </div>
        <div>
          <Image src="https://links.papareact.com/7ma" width={1600} height={600} alt="banner" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
