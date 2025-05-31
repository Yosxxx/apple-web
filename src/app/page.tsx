import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HighLights from "@/components/HighLights";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <HighLights></HighLights>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </main>
  );
};

export default App;
