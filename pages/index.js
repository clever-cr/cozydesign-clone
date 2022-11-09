import Head from "next/head";
import NavBar from "../Components/Layout/NavBar";
import Hero from "../Components/Sections/HomePage/Hero";
import Us from "../Components/Sections/HomePage/Us";
import Client from "../Components/Sections/HomePage/Client";
import Partner from "../Components/Sections/HomePage/Partner";
import Designer from "../Components/Sections/HomePage/Designer";
import Help from "../Components/Sections/HomePage/Help";
import Footer from "../Components/Layout/Footer";
function HomePage() {
  return (
    <>
      <div>
        <Head>
          <title>Cozy: Honest, real-world digital design & marketing</title>
          <meta name="description" content="NEAR dev 101" />

          <link rel="icon" href="/co.png" />
        </Head>
        <NavBar />
        <Hero />
        <Us />
        <Client />
        <Partner />
        <Designer />
        <Help />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
