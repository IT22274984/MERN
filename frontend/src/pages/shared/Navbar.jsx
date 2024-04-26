import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/icare.png'; // Importing your logo image
import { FaXmark, FaBarsStaggered } from "react-icons/fa6"; // Importing the missing icons

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Book", path: "/shop" },
        { link: "Upload Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
        { link: "Chat", path: "/chat" },
    ];
    return (
        <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
                }`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <Link to="/" className="flex items-center gap-2">
                        {/* Adjusting the size of the logo to 4 times its current size */}
                        <img src={logo} alt="ICare Logo" className="inline-block h-auto w-auto" style={{ height: "5.5em", width: "auto" }} />
                    </Link>

                    <ul className="md:flex space-x-12 hidden navitems">
                        {
                            navItems.map(({ link, path }) => <Link key={link} to={path}  className="link block text-base cursor-pointer uppercase text-black hover:text-blue-700">
                                {link}
                            </Link>)
                        }
                    </ul>

                    <div className="space-x-12 hidden lg:flex items-center">
                       <button> <FaBarsStaggered className="w-5 hover:text-blue-700" /></button>
                    </div>

                    {/* menu btn, visible on mobile screen */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <FaXmark className="h-6 w-6 text-black" />
                            ) : (
                                <FaBarsStaggered className="h-5 w-5 text-black" />
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
                >
                    {
                        navItems.map(({ link, path }) => <a
                            href={path} 
                            key={link}
                            onClick={toggleMenu}
                            className="block  text-white hover:text-gray-500"
                        >
                            {link}
                        </a>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
