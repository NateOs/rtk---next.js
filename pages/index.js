import Head from "next/head";
import Image from "next/image";
import Aside from "../components/aside";
import ProductDetails from "../components/productDetails";
import profilePicture from "../public/assets/profile.jpg";


export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Fashion Display</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main grid">
        <Aside />
        <ProductDetails />
      </main>
    </div>
  );
}
