import Image from 'next/image';

export default function NavBar() {
    return (
        <div className="flex flex-row p-5">
            <div className=" flex items-center">
                <a href='/'>
                    <Image src={'/images/heartlogo.gif'} alt='logo' width="80" height="80" />
                </a>
                <p className="text-2xl font-bold p-5"><a href="/">Your Certain Something</a></p>
            </div>
            <div className="flex items-center ml-auto pr-2">
                <ul className="flex flex-row">
                    <li className="p-4 text-lg"><a href="/">Home</a></li>
                    <li className="p-4 text-lg"><a href="/about">About</a></li>
                    <li className="p-4 text-lg"><a href="/projects">Projects</a></li>
                    <li className="p-4 text-lg"><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}