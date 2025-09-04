import { VideoSection } from "../components/media/VideoSection";
import Services from "../components/media/Services";
import { ContactForm } from "./ContactForm";
import { PropertyRegisterForm } from "./PropertyRegisterForm";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <VideoSection />
      <Services />
      {/* <ContactForm /> */}
      <PropertyRegisterForm />
    </div>
  );
};

export default Home;
