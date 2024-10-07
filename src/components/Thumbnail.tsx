export default function Thumbnail({src, alt, caption}: {src: string, alt: string, caption: string}) {
    return(
        <div className="p-5 min-w-[300px]">
            <figure className="relative flex flex-col z-0">
                <img src={src} alt={alt} height="300" width="400" />
                <figcaption className="absolute bottom-0 z-10">{caption}</figcaption>
            </figure>
        </div>
    );
}