export default function CtaButton({title, url}: {title: string, url: string}) {
    return (
        <div className="flex w-[150px] h-[70px]">
            <a className="bg-black text-white w-full h-full flex justify-center items-center rounded-md text-lg" href={url}>{title}</a>
        </div>
    );
}