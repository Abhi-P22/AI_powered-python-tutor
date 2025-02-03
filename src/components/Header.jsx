import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <Link to="/">AI Python Tutor</Link>
                </h1>

                {/* Menu(Mobile) */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link className="hover:underline" to="/">Home</Link></li>
                    <li><Link className="hover:underline" to="/chat">Tutor</Link></li>
                    <li><Link className="hover:underline" to="/settings">Settings</Link></li>
                    <li><Link className="hover:underline" to="/lessons">Lessons</Link></li>
                    <li><Link className="hover:underline" to="/about">About</Link></li>
                </ul>
            </div>

            {/* Mobile Menu (open) */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center bg-blue-700 text-white py-4 space-y-4">
                    <li><Link className="hover:underline" to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link className="hover:underline" to="/chat" onClick={() => setIsOpen(false)}>Chat</Link></li>
                    <li><Link className="hover:underline" to="/settings" onClick={() => setIsOpen(false)}>Settings</Link></li>
                    <li><Link className="hover:underline" to="/lessons" onClick={() => setIsOpen(false)}>Lessons</Link></li>
                    <li><Link className="hover:underline" to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                </ul>
            )}
        </nav>
    );
}

export default Header;

