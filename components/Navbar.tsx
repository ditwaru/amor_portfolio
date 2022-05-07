import Link from "next/link";

const Navbar = ({goTo}: {goTo: string}) => 
    <nav className="absolute left-0 top-5 w-full px-5 flex justify-between text-blue-900 font-bitter font-bold">
        <Link href="/"><a>&#8592; Back to home</a></Link>
        <Link href={`/${goTo.toLowerCase()}`}><a>{goTo} &#8594;</a></Link>
    </nav>

export default Navbar;