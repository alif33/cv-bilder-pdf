import About from "../../components/Home/About/About";
import CVSteps from "../../components/Home/CV-Steps/CVSteps";
import Dream from "../../components/Home/Dream/Dream";
import Faq from "../../components/Home/Faq/Faq";
import Hero from "../../components/Home/Hero/Hero";
import Sponsor from "../../components/Home/Sponsor/Sponsor";
import Templates from "../../components/Home/Templates/Template";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Templates />
      <CVSteps />
      <About />
      <Dream />
      <Testimonial />
      <Sponsor />
      <Faq />
      <Footer />
    </>
  );
}
