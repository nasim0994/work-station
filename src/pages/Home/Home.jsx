import "./Home.css";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Categories from "../../components/HomeComponents/Categories/Categories";
import WhyChoose from "../../components/HomeComponents/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyChoose />
    </>
  );
}
