import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
