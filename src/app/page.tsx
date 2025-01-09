import BrandFeatures from "@/components/BrandFeatures";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsLetterSignup";
import BrandStory from "@/components/BrandStory";
import NewCeramics from "@/components/NweCeramics";
import PopularProducts from "@/components/PopularProducts";


export default function Home() {
  return (
<div>
<Hero />
      <BrandFeatures />
      <NewCeramics />
      <PopularProducts />
      <NewsletterSignup />
      <BrandStory />     
    </div>
  );
}
