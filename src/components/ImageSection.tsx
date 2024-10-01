import Image from 'next/image';

export default function ImageSection() {
    return (
        <div className="flex flex-col m-10 items-center">
            <div className="flex text-xl md:text-3xl xl:text-4xl justify-center">
                <p>Why invest in gamification?</p>
            </div>
            <div className="flex justify-center mt-5 gap-x-4 max-w-[700px] p-4">
                <Image className="w-1/5"  src={'/images/more-engaging.png'} alt='logo' width="150" height="150" />
                <Image className="w-1/5" src={'/images/more-useable.png'} alt='logo' width="150" height="150" />
                <Image className="w-1/5" src={'/images/healthy-competition.png'} alt='logo' width="150" height="150" />
                <Image className="w-1/5" src={'/images/realtime-feedback.png'} alt='logo' width="150" height="150" />
                <Image className="w-1/5" src={'/images/more-unique.webp'} alt='logo' width="150" height="150" />
            </div>
            <div className="border-b-2 border-grey-200 m-6"></div>
        </div>
    );
}