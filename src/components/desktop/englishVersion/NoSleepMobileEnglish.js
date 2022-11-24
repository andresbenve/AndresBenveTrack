import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function NoSleep() {
  return (
    <div className="productImagewrapperNoSleepMobile">
      <Carousel
        autoPlay
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        preventMovementUntilSwipeScrollTolerance={true}
        // axis="vertical"
      >
        <div>
          <Image
            className="productImagewrapperNoSleepMobile"
            height={500}
            width={200}
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/Vestido%20StartWars.png"
            alt="image"
          />
        </div>

        <div>
          <Image
            className="productImagewrapperNoSleepMobile"
            height={500}
            width={200}
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/Vestido%20StartWars.png"
            alt="image"
          />
        </div>

        <div>
          <Image
            height={500}
            width={200}
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/Vestido%20StartWars.png"
            alt="image"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default NoSleep;
