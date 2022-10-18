import Head from "next/head";

import HeaderEnglish from "./HeaderMobileEnglish";
import ProductFeedEnglish from "./ProductFeedMobileEnglish";
import ProductFeed2English from "./ProductFeed2MobileEnglish";
import VideoVestidos from "../../shared/VideoVestidos";
import NoSleepEnglish from "./NoSleepMobileEnglish";
import FooterInfoEnglish from "./FooterInfoMobileEnglish";
import FooterEnglish from "./FooterMobileEnglish";
import Studio from "../../shared/Studio";
import CenterModeEnglish from "./CenterModeMobileEnglish";
import FooterPoliciesEnglish from "./FooterPoliciesEnglish";
import Image from "next/image";
//import { handler } from "./api/tasks";
import { useEffect, useState } from "react";
import CapitalLetters from "./CapitalLetters";

function EnglishVersion({ products }) {
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
      <HeaderEnglish />
      <CapitalLetters/>
      {/* ---- ---- */}
      {/* <NoSleepEnglish /> */}
      {/* <VideoVestidos /> */}

      <main className="max-w-screen-2xl mx-auto">
        {/* {banner} */}
        {/* {productFeed} */}
        <ProductFeedEnglish products={products} />
      </main>
      <main className="max-w-screen-2xl mx-auto">
        {/* {banner} */}
        {/* {productFeed} */}
        <ProductFeed2English products={products} />
      </main>
      <div>
        <CenterModeEnglish />
      </div>
      {/* <div>
  <WhatsappEnglish />
</div> */}
      <div>
        <Studio />
      </div>

      <div>
        <FooterEnglish products={products} />
      </div>
      <div>
        <FooterInfoEnglish />
      </div>

      <div>
        <FooterPoliciesEnglish />
      </div>
    </div>
  );
}

export default EnglishVersion;
