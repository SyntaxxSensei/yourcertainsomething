import Image from 'next/image';

export default function Carousel() {
    return (
    <div className="flex flex-col m-10 items-center">
        <div className="flex sm:flex-row flex-col justify-center mt-5 p-4">
            <div className="flex justify-center items-center">
                <Image className="w-14 h-14 mr-2" src={'/images/carousel/cranfield.png'} alt='logo' width="100" height="80" />
                <Image className="w-auto h-8 mr-2" src={'/images/carousel/alludio.webp'} alt='logo' width="100" height="80" />
                <Image className="w-auto h-14 mr-2" src={'/images/carousel/cobb.jpg'} alt='logo' width="100" height="80" />
            </div>
            <div className="flex justify-center items-center">
                <Image className="w-auto h-14 mr-2" src={'/images/carousel/queensland-uni.png'} alt='logo' width="100" height="80" />
                <Image className="w-auto h-14 mr-2" src={'/images/carousel/franco.png'} alt='logo' width="100" height="80" />
                <Image className="w-auto h-14 mr-2" src={'/images/carousel/uoq.png'} alt='logo' width="100" height="80" />
            </div>
        </div>
    </div>
    );
}