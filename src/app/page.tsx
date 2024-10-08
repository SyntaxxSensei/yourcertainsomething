import Hero from "@/components/Hero";
import ImageSection from "@/components/ImageSection";
import TextArea from "@/components/TextArea";
import FeatureImage from "@/components/FeatureImage";
import Separator from "@/components/Separator";
import FeatureText from "@/components/FeatureText";
import Carousel from "@/components/Carousel";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageSection />
      <TextArea />
      <FeatureImage />
      <FeatureText />
      <Separator />
      <Carousel />
      <Testimonial message="I loved what you created for my course, so I had to come back to work with you again." name="Martin - Academic" />
    </>
  );
}
