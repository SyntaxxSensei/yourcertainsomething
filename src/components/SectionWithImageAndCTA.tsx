import CtaButton from "@/elements/CtaButton"

export default function SectionWithImageAndCTA() {
    return (
        <div className="flex flex-col md:flex-row justify-center pb-10">
            <div className="flex justify-center">
                <img src="/images/zoe.jpg"
                     className="object-cover h-[400px] md:h-[500px]"
                     alt="A portrait picture of Zoe with black glasses and red lipstick"
                     height="500"
                     width="500" />
            </div>
            <div className="flex flex-col md:max-w-[400px] lg:max-w-[600px] p-10 justify-center">
                <div>
                    <h1 className="text-lg md:text-3xl font-bold pb-6">About</h1>

                    <p className="text-lg pb-5">My name is Zoe and I’m a home-grown Aussie animator and game designer.</p>

                    <p className="text-lg pb-5">I have over 16 years of experience in conceptualising, designing, and producing animations, 
                    User Interfaces, and customised interactive learning resources and games.</p>

                    <p className="text-lg pb-5">I love working with my clients to help them see their ideas come to life.</p>
                </div>
                <div className="" >
                    <CtaButton title="Get Started" url="/contact" />
                </div>
            </div>
        </div>
    );
}