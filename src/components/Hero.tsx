export default function Hero() {
    return (
        <div className="bg-hero h-[500px] md:h-[600px] flex">
            <div className="flex flex-col justify-center p-8 md:p-24 w-[500px]">
                <span className="text-5xl text-white pb-6">Personalised game design.</span>
                <span className="text-lg text-white pb-6">Enhance communication, collaboration, cognition and retention through intuitive game design.</span>
                <span className="flex">
                    <a href="/projects" className="border-2 border-black p-4 text-black hover:text-white hover:bg-black">See what&apos;s possible</a>
                </span>
            </div>
        </div>
    );
}