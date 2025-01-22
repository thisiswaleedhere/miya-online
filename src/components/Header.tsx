import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // {/* Header */ }
        <header className="fixed w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  shadow-md z-50" >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        {/* <Briefcase className="w-8 h-8 text-blue-600" /> */}
                        <span className="text-4xl font-bold text-[#360f34]">MIYA ONLINE</span>
                        {/* <img src="/img/miyalogo.svg" alt="Miya Online Logo" className="w-60" /> */}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center font-semibold space-x-8 ">
                        <a href="#home" className="text-[#360f34] hover:text-fuchsia-900 transition-colors ">Home</a>
                        <a href="#services" className="text-[#360f34]text-[#360f34] hover:text-fuchsia-900 transition-colors ">Services</a>
                        <a href="#whychooseus" className="text-[#360f34] hover:text-fuchsia-900 transition-colors">Why Choose Us</a>
                        {/* <a href="#contact" className="text-gray-600 hover:text-fuchsia-900 transition-colors">Contact</a> */}
                        <button onClick={() => {
                            window.open('tel:00919846853335', '_self')
                        }} className=" hover:bg-[#574f7c]/85 bg-fuchsia-900 text-white px-4 py-2 rounded-full transition-colors">
                            Contact Us
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#360f34]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4 font-semibold">
                            <a href="#home" className="text-[#360f34] hover:text-fuchsia-900 transition-colors">Home</a>
                            <a href="#services" className="text-[#360f34] hover:text-fuchsia-900 transition-colors">Services</a>
                            <a href="#whychooseus" className="text-[#360f34] hover:text-fuchsia-900 transition-colors">Why Choose Us</a>
                            {/* <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a> */}
                            <button onClick={() => {
                                window.open('tel:00919846853335', '_self')
                            }} className="hover:bg-[#574f7c]/85 bg-fuchsia-900 text-white px-4 py-2 rounded-full  transition-colors w-full">
                                Call Us
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header >
    )

}

export default Header;