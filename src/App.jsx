import "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FileUploadAI from "./components/FileUploadAI";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />

      <div>
        <FileUploadAI />
      </div>
    </div>
  );
}

export default App;
