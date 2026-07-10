import "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FileUploadAI from "./components/FileUploadAI";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./Footer";

import ExperienceTimeline from "./components/ExperienceTimeline";
import PortHome from "./components/PortHome";


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Testimonials />
      <ContactUs />
      <Footer />

      <ExperienceTimeline />
      <PortHome />
   
      <FileUploadAI />
    </div>
  );
}

export default App;
