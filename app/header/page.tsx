import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
    return (
        <header className="text-black fixed top-0 left-0 right-0 bg-white m-auto p-8  sm:justify-center  flex ">
            <div className="flex items-center justify-center">
                <nav className="flex justify-center items-center">
                    <ul className="flex space-x-8  justify-center items-center">
                        <li><a id="a" href="#present">Présentation</a></li>
                        <li><a id="a" href="#project">Projets</a></li>
                    </ul>
                </nav>
                <nav  className=" absolute right-2 justify-end sm:flex items-center sm:static">
                    <ol className="flex space-x-2  sm:flex sm:right-10 sm:absolute sm:content-center sm:space-x-4">
                        <li><Link 
                                href="https://www.linkedin.com/in/quentin-balloy-02469a297/">
                                <Image
                                    src="/linkedin.png" 
                                    title="Linkedin de Quentin Balloy" 
                                    alt="logo de linkedin" 
                                    width={19}
                                    height={19}   
                                />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://github.com/XP3rS0na">
                                <Image 
                                    src="/github.png" 
                                    title="Github de Quentin Balloy" 
                                    alt="logo de Github"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
    </header>
    )
}