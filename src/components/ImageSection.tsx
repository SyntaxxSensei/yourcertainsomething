import Image from 'next/image';

export default function ImageSection() {
    return (
        <div className="flex flex-col m-10 items-center">
            <div className="flex text-xl md:text-4xl justify-center">
                <p>Why invest in gamification?</p>
            </div>
            <div className="flex sm:flex-row flex-col justify-center mt-5 p-4">
                <div className="flex justify-center">
                    <Image className="w-auto" src={'/images/more-engaging.png'} alt='logo' width="100" height="100" />
                    <Image className="w-auto" src={'/images/more-useable.png'} alt='logo' width="100" height="100" />
                    <Image className="w-auto" src={'/images/healthy-competition.png'} alt='logo' width="100" height="100" />
                </div>
                <div className="flex justify-center">
                    <Image className="w-auto" src={'/images/realtime-feedback.png'} alt='logo' width="100" height="100" />
                    <Image className="w-auto" src={'/images/more-unique.webp'} alt='logo' width="100" height="100" />
                </div>
            </div>
        </div>
    );
}