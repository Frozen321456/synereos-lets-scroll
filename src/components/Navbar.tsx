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
        document.documentElement.classList.add('scrolled');
      } else {
        document.documentElement.classList.remove('scrolled');
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

  const closeMenu = () => setMobileOpen(false);

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

      <div id="top" />

      {/* Sticky Glass Navbar */}
      <header id="navbar" className="nav-bar" role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <a href="#top" className="logo" aria-label="Synereos Home">
            <span className="logo-dot" aria-hidden="true" />
            <span className="logo-text">SYNEREOS</span>
          </a>
        </div>

        <nav className="nav-links" id="nav-links" role="menubar" aria-label="Main sections">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              data-nav
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <a 
          href="#execute" 
          className="nav-cta" 
          id="nav-cta-desktop" 
          style={{ display: window.innerWidth > 860 ? 'inline-flex' : 'none' }}
        >
          Enter Synereos
        </a>

        <button 
          className="nav-burger" 
          id="burger" 
          aria-label="Toggle navigation menu" 
          aria-expanded={false}
          aria-controls="mobile-menu"
          onClick={() => document.getElementById('mobile-menu')?.classList.toggle('open')}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      {/* Mobile drawer overlay */}
      <div className="nav-overlay" id="mobile-menu" aria-hidden="true">
        <div className="nav-drawer" role="dialog" aria-label="Navigation menu">
          <button 
            className="nav-drawer-close" 
            aria-label="Close navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <nav className="nav-links" role="menubar">
            {sectionsWithExecute.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`} 
                data-nav-mobile 
                role="menuitem"
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  document.getElementById('mobile-menu')?.classList.remove('open');
                }}
              >
                {section.label}
              </a>
            ))}
            <a className="nav-cta" href="#execute" style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}>
              Enter Synereos
            </a>
          </nav>
        </nav>
      </div>
    </>
  );
}

export default Navbar;