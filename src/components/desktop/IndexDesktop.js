import { useSession, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../desktop/HeaderDesktop";
import ProductFeedDesktop from "../desktop/ProductFeedDesktop";
import ProductFeed2Desktop from "../desktop/ProductFeed2Desktop";
import VideoVestidos from "../shared/VideoVestidos";
import NoSleepDesktop from "../desktop/NoSleepDesktop";
import FooterDesktop from "../desktop/FooterDesktop";
import Whatsapp from "../shared/Whatsapp";
import FooterInfoDesktop from "../desktop/FooterInfoDesktop";
import Studio from "../shared/Studio";
import CenterModeDesktop from "./CenterModeDesktop";

import Image from "next/image";
//import { handler } from "./api/tasks";
import { useEffect } from "react";

{
  /* PUSH ARRIESGADO */
}
//handler();

export default function IndexDesktop({ products }) {
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
        <title>Benve</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/2e4cc444-ae77-4363-903c-36e28be9cad2.JPG"
        />
      </Head>
      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      <Header />
      {/* ---- ---- */}
      <NoSleepDesktop />

      <main className="max-w-screen-2xl mx-auto">
        {/* {banner} */}
        {/* {productFeed} */}
        <ProductFeedDesktop products={products} />
      </main>
      {/* <VideoVestidos /> */}
      <main className="max-w-screen-2xl mx-auto">
        {/* {banner} */}
        {/* {productFeed} */}
        <ProductFeed2Desktop products={products} />
      </main>
      {/* <div>
        <CenterModeDesktop />
      </div> */}
      <div>
        <Whatsapp />
      </div>
      <div>
        <Studio />
      </div>
      <div>
        <FooterInfoDesktop />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch("https://fakestoreapi.com/products").then(
  //   (res) => res.json()
  // );
  const products = [
    {
      id: 1,
      // video: "https://player.vimeo.com/video/710975462?background=1",
      video: "",
      title: "VESTIDO BOMBA",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVioleta.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "violeta",
    },
    {
      id: 2,
      video: "",
      title: "VESTIDO VERDE R",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVerde.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVerde.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVerde.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoVerde.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "verde",
    },
    {
      id: 3,
      video: "",
      title: "VESTIDO MILANESA",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlancha.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlancha.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlancha.png",
      ],
      rating: 5,
      longitud: "largo",
      color: "piel",
    },
    {
      id: 4,
      video: "",
      title: "VESTIDO INCA",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoNaranja.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoNaranja.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoNaranja.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoNaranja.png",
      ],
      rating: 5,
      longitud: "largo",
      color: "naranja",
    },
    {
      id: 5,
      video: "",
      title: "VEST",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "VESTIDO LILA",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoVaiolet.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoVaiolet.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoVaiolet.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoVaiolet.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "violeta",
    },
    {
      id: 6,
      video: "",
      title: "VESTIDO BOMBA AL AGUA",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoVaiolet.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoVaiolet.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/VestidoVaiolet.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "violeta",
    },
    {
      id: 7,
      video: "",
      title: "VESTIDO HELICOPERO",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoHelicoptero.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoHelicoptero.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoHelicoptero.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoHelicoptero.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "naranja",
    },
    {
      id: 8,
      video: "",
      title: "VESTIDO RETAZOS",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoMulticolor.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoMulticolor.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoMulticolor.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoMulticolor.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "piel",
    },
    {
      id: 9,
      video: "",
      title: "VESTIDO PLAYA",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "rojo",
    },
    {
      id: 10,
      video: "",
      title: "VESTIDO PLAYA",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: [
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
        "https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/vestidosBenve/vestidoPlya.png",
      ],
      rating: 5,
      longitud: "corto",
      color: "rojo",
    },
  ];

  return {
    props: {
      products,
    },
  };
}

//GET =>>> https://fakestoreapi.com/products
