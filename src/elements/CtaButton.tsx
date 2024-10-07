export default function CtaButton({title, url}: {title: string, url: string}) {
    return (
        <div className="w-[200px] h-[50px] bg-black">
            <a className="text-white flex justify-center items-center rounded-md text-lg" href={url}>{title}</a>
        </div>
    );
}