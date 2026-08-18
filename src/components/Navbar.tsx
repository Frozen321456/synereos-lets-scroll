'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  
  const sections = [
    { id: 'intent', label: 'Intent' },
    { id: 'think', label: 'Think' },
    { id: 'build', label: 'Build' },
    { id: 'orchestrate', label: 'Orchestrate' },
    { id: 'hexim', label: 'HEXIM' },
  ];
  
  const sectionsWithExecute = [
    ...sections,
    { id: 'execute', label: 'Execute' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleBurgerClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseMenu = () => setMobileOpen(false);

  return (
    <>
      {/* Background atmosphere */}
      <div className="grain" aria-hidden="true" />
      <div className="void-glow" aria-hidden="true" />

      {/* Signal Spine (Desktop only) */}
      <div className="spine-track" id="spine" aria-hidden="true">
        <div className="spine-line-bg" />
        <div className="spine-line-fg" id="spine-fg" />
      </div>

      <div id="top"></div>

      {/* Sticky Glass Navbar */}
      <header id="navbar" className="nav-bar" role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <a className="logo" href="#top"><span className="logo-dot" aria-hidden="true" />SYNEREOS</a>
        </div>
        <nav className="nav-links" id="nav-links" role="menubar">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              data-nav
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#execute" style={{ display: window.innerWidth > 860 ? 'inline-flex' : 'none' }} id="nav-cta-desktop">Enter Synereos</a>
        <button className="nav-burger" id="burger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </header>

      <div id="mobile-menu">
        <a href="#intent" data-nav-mobile>Intent</a>
        <a href="#think" data-nav-mobile>Think</a>
        <a href="#build" data-nav-mobile>Build</a>
        <a href="#orchestrate" data-nav-mobile>Orchestrate</a>
        <a href="#hexim" data-nav-mobile>HEXIM</a>
        <a href="#execute" className="mm-cta" data-nav-mobile>Enter Synereos</a>
      </div>
    </>
  );
}

export default Navbar;