/**
 * Home — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Composes all sections: Hero, About, PrayerTimes, Services, Events, Donate, Contact
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrayerTimesSection from "@/components/PrayerTimesSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import DonateSection from "@/components/DonateSection";
import VideoSection from "@/components/VideoSection";
import SermonsSection from "@/components/SermonsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PrayerTimesSection />
      <ServicesSection />
      <EventsSection />
      <VideoSection />
      <SermonsSection />
      <ResourcesSection />
      <DonateSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
