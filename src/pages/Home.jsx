import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Blog from "../components/Blog";
import Footer from "../components/Footer"
import CtaSection from "../components/Cta";
import Women from "../components/women";
const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>

      <section className="section future_here">
        <Women />
      </section>

      <section className="section cta_section">
        <CtaSection />
      </section>
      <section className="section blog_section">
        <Blog />
      </section>
      <section className="section footer_section">
        <Footer />
      </section>
    </>
  );
};

export default Home;
