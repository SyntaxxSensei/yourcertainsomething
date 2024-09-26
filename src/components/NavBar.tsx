import Image from 'next/image';

export default function NavBar() {
    return (
        <div className="flex flex-row">
            <div className=" flex items-center">
                <a href='/'>
                    <Image src={'/images/heartlogo.gif'} alt='logo' width="80" height="80" />
                </a>
                <p className="text-2xl p-5"><a href="/">Your Certain Something</a></p>
            </div>
            <div className="flex items-center ml-auto pr-10">
                <ul className="flex flex-row">
                    <li className="p-3"><a href="/about">About</a></li>
                    <li className="p-3"><a href="/projects">Projects</a></li>
                    <li className="p-3"><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}