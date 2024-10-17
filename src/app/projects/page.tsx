"use client"

import { useEffect, useState } from 'react';
import data from "@/jsonData/images.json";
import Thumbnail from "@/components/Thumbnail"
import ThumbnailImage from '../models/ThumbnailImage';

export default function Projects() {
    const [images, setImages] = useState<ThumbnailImage[] | []>([]);
    const [slideshowImage, setSlideshowImage] = useState<ThumbnailImage | null>(null);
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [slideshowOpen, setSlideshowOpen] = useState<boolean>(false);

    useEffect(() => {
        const getImageData = async () => {
            setImages(data.images);
        }

        getImageData()
            .catch(console.error);;
    }, []);

    function showSlideshow(event: React.MouseEvent<HTMLAnchorElement>, thumbnailImage: ThumbnailImage, index: number) {
        event.preventDefault();
        setSlideshowOpen(true);
        setSlideshowImage(thumbnailImage);
        setCurrentImage(index);
    }

    function nextImage(event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();
        const nextImage = getNextImageIndex(true);
        setCurrentImage(nextImage);
        setSlideshowImage(images[nextImage]);
    }

    function previousImage(event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();
        const nextImage = getNextImageIndex(false);
        setCurrentImage(nextImage);
        setSlideshowImage(images[nextImage]);
    }

    function closeSlideshow(event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();
        setSlideshowOpen(false);
    }

    function getNextImageIndex(isForward: boolean): number {
        if (currentImage === images.length - 1 && isForward) {
            setCurrentImage(0);
            return 0;
        }

        if (currentImage === 0 && !isForward) {
            setCurrentImage(images.length - 1);
            return images.length - 1;
        }
        
        if (isForward) { 
            return currentImage + 1;
        }
        else {
            return currentImage - 1;
        }
    }

    return (
        <>
            <div>
                <div className="flex ml-5 md:ml-32">
                    <h1 className="text-3xl font-bold">Projects</h1>
                </div>
                {images.length > 0 && (
                    <div className="flex flex-col flex-wrap md:flex-row justify-center content-around">
                        {images.map((image, index) => (
                            <a href="#" key={index} onClick={(e) => showSlideshow(e, image, index)}>
                                <Thumbnail key={index} src={image.url} alt={image.alt} caption={image.caption} />
                            </a>
                        ))}
                    </div>
                )}
            </div>
            {slideshowImage && slideshowOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col">
                    <div className="relative flex flex-row items-center w-full h-full">
                        <div className="hidden md:flex text-white p-10">
                            <a href="#" onClick={(e) => previousImage(e)}>Previous</a>
                        </div>
                        <div className="w-full bg-black flex justify-center items-center">
                            <img className="block h-screen max-w-full m-auto pt-10 pb-10" src={slideshowImage.url} alt={slideshowImage.alt} />
                        </div>
                        <div className="hidden md:flex text-white p-10">
                            <a href="#" onClick={(e) => nextImage(e)}>Next</a>
                        </div>
                        <div className="absolute top-0 right-0 p-10 text-white">
                            <a href="#" className="absolute top-10 right-10" onClick={(e) => closeSlideshow(e)}>Close</a>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    );
}