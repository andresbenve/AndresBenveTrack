// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// function NoSleep() {
//   return (
//     <div>
//       <Carousel
//         autoPlay
//         infiniteLoop={true}
//         showArrows={true}
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         interval={3000}
//       >
//         <div>
//           <img
//             loading="lazy"
//             src="https://links.papareact.com/gi1"
//             alt="image"
//           />
//         </div>

//         <div>
//           <img
//             loading="lazy"
//             src="https://links.papareact.com/6ff"
//             alt="image"
//           />
//         </div>

//         <div>
//           <img
//             loading="lazy"
//             src="https://links.papareact.com/7ma"
//             alt="image"
//           />
//         </div>
//       </Carousel>
//     </div>
//   );
// }

// export default NoSleep;

{
  /* Con vestido de Star Wars */
}

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function NoSleep() {
  return (
    <div className="productImagewrapperNoSleep">
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
            className="productImagewrapperNoSleep"
            height={600}
            width={240}
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/Vestido%20StartWars.png"
            alt="image"
          />
        </div>

        <div>
          <Image
            height={600}
            width={240}
            loading="lazy"
            src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/Vestido%20StartWars.png"
            alt="image"
          />
        </div>

        <div>
          <Image
            className="productImagewrapperNoSleep"
            height={600}
            width={240}
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
