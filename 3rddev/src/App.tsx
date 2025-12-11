import { Hero } from './sections/Hero';
import { Differentiator } from './sections/Differentiator';
import { Services } from './sections/Services';
import { Pricing } from './sections/Pricing';
import { CaseStudies } from './sections/CaseStudies';
import { SocialProof } from './sections/SocialProof';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SocialProof />
      <Differentiator />
      <Services />
      <Pricing />
      <CaseStudies />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
