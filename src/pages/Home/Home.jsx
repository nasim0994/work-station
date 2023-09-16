import "./Home.css";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Categories from "../../components/HomeComponents/Categories/Categories";
import WhyChoose from "../../components/HomeComponents/WhyChoose/WhyChoose";
import ForClient from "../../components/HomeComponents/ForClient/ForClient";
import TrustedBrand from "../../components/HomeComponents/TrustedBrand/TrustedBrand";
import ExpertFreelancers from "../../components/HomeComponents/ExpertFreelancers/ExpertFreelancers";
import Testimonial from "../../components/HomeComponents/Testimonial/Testimonial";

export default function Home() {
  window.scroll(0, 0);

  return (
    <>
      <Hero />
      <TrustedBrand />
      <Categories />
      <WhyChoose />
      <ExpertFreelancers />
      <ForClient />
      <Testimonial />
    </>
  );
}
