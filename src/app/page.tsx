import BodySection from "@/components/BodySection/BodySection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Background from "@/components/HeroSection/Background";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Background />
        <BodySection />
        <Footer />
      </div>
    </>
  );
}
