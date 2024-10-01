import Image from 'next/image';

export default function ImageSection() {
    return (
        <div className="flex flex-col m-10">
            <div className="flex text-3xl justify-center">
                <p>Why invest in gamification?</p>
            </div>
            <div className="flex flex-row justify-center gap-x-8 mt-5">
                <Image src={'/images/more-engaging.png'} alt='logo' width="90" height="90" />
                <Image src={'/images/more-useable.png'} alt='logo' width="90" height="90" />
                <Image src={'/images/healthy-competition.png'} alt='logo' width="90" height="90" />
                <Image src={'/images/realtime-feedback.png'} alt='logo' width="90" height="90" />
                <Image src={'/images/more-unique.webp'} alt='logo' width="90" height="90" />
            </div>
            <div className="border-b-2 border-grey-200 m-6"></div>
        </div>
    );
}