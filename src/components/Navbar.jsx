import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
            <UtensilsCrossed size={18} />
          </div>
          <span className="text-white font-semibold tracking-wide">Revelstoke Indian Kitchen</span>
        </a>

        <div className="hidden md:flex items-center">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a href="#menu" className="ml-4 inline-flex items-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-500 transition-colors">Order</a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
