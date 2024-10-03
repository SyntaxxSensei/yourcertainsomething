import SectionWithImageAndCTA from "@/components/SectionWithImageAndCTA";
import SmallSeparator from "@/components/SmallSeparator";
import Testimonial from "@/components/Testimonial";

export default function About() {
    return (
        <>
            <SectionWithImageAndCTA />
            <SmallSeparator />
            <Testimonial message="I bring light, so your ideas can shine" name="Zoe Lynch" />
            <SmallSeparator />
        </>
    );
}