
import LandingNavbar from "../components/LandingNavbar";
import HeroSection from "../components/HeroSection";
import StatisticsSection from "../components/StatisticsSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import DashboardShowcase from "../components/DashboardShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import LandingFooter from "../components/LandingFooter";

export default function Welcome() {
  return (
    <>
      <LandingNavbar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="statistics">
          <StatisticsSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="how">
          <HowItWorksSection />
        </section>

        <section id="dashboard">
          <DashboardShowcase />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <section id="contact">
          <LandingFooter />
        </section>
      </main>
    </>
  );
}