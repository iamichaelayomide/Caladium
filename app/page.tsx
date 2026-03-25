import { HomeAboutPreview, HomeVision, HomeWhyCaladium } from "@/components/home/AboutWhyVision";
import { HomeBlogPreview, HomeClientLogos, HomeContactPreview, HomeTestimonials } from "@/components/home/EngagementSections";
import { HomeHero } from "@/components/home/Hero";
import { HomeServices } from "@/components/home/ServicesStats";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeAboutPreview />
      <HomeWhyCaladium />
      <HomeVision />
      <HomeTestimonials />
      <HomeClientLogos />
      <HomeContactPreview />
      <HomeBlogPreview />
    </>
  );
}
