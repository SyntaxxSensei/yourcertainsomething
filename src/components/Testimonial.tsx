export default function Testimonial({message, name}: {message: string, name: string}) {
    return (
        <div className="flex flex-col p-10">
            <q className="text-2xl ml-auto mr-auto md:max-w-[620px] pb-6 italic">{message}</q>
            <p className="ml-auto mr-auto ssmd:max-w-[620px] pb-6">{name}</p>
        </div>
    );
}