'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navigation.module.css';

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background/shadow
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 72) {
        setIsHidden(true);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (pathname.startsWith('/admin')) {
    return null;
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Work', path: '/work' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <header 
      className={`
        ${styles.header} 
        ${isScrolled ? styles.scrolled : ''} 
        ${isHidden ? styles.hidden : ''}
      `}
    >
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="I Am To Work"
              width={170}
              height={48}
              priority
              className={styles.logoImg}
            />
          </Link>
        </div>
        
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className={styles.activeUnderline}
                    initial={false}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.actionPrimary}>
            Book a Call
          </Link>
          <button 
            className={styles.hamburger} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${isOpen ? styles.barTop : ''}`}></span>
            <span className={`${styles.bar} ${isOpen ? styles.barMid : ''}`}></span>
            <span className={`${styles.bar} ${isOpen ? styles.barBot : ''}`}></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className={`${styles.mobileLink} ${pathname === link.path ? styles.mobileLinkActive : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className={styles.mobileCtas}>
              <Link href="/contact" className={styles.mobilePrimary} onClick={() => setIsOpen(false)}>
                Book a Call
              </Link>
              <Link href="/login" className={styles.mobileSecondary} onClick={() => setIsOpen(false)}>
                Client Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
