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

    function nextImage(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        setCurrentImage(currentImage + 1);
        setSlideshowImage(images[currentImage + 1]);
    }

    function previousImage(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        setCurrentImage(currentImage - 1);
        setSlideshowImage(images[currentImage - 1]);
    }

    function closeSlideshow(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        setSlideshowOpen(false);
    }

    return (
        <div>
            <div>
                <h1>Projects</h1>
            </div>

            <div className="flex flex-col flex-wrap md:flex-row justify-center content-around">
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
            <div className="absolute top-0 left-0 w-full h-full bg-black flex">
                {slideshowImage && (
                    <div className="flex flex-row items-center">
                        <div className="hidden md:flex text-white p-10">
                            <a href="#" onClick={(e) => previousImage(e)}>Previous</a>
                        </div>
                        <div className="w-full h-full bg-black flex justify-center items-center">
                            <img className="w-auto h-auto" src={slideshowImage.url} alt={slideshowImage.alt} />
                        </div>
                        <div className="hidden md:flex text-white p-10">
                            <a href="#" onClick={(e) => nextImage(e)}>Next</a>
                        </div>
                        <div className="absolute top-0 right-0 p-10 text-white">
                            <a href="#" className="absolute top-10 right-10">Close</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}