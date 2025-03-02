'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, PencilIcon, CalendarIcon, MailIcon, MoonIcon, SunIcon, Phone, FileText, User, Dumbbell } from 'lucide-react';
import { contactsData } from "@/utils/data/contactsData";

// Define icons
const Icons = {
  skills: Dumbbell,
  phone: Phone,
  fileText: FileText,
  user: User,
  home: HomeIcon,
  blog: PencilIcon,
  calendar: CalendarIcon,
  email: MailIcon,
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  ),
}

// Data for navbar and social links
const DATA = {
  navbar: [
    { href: "#", icon: "home", label: "Home" },
    { href: "#projects", icon: "fileText", label: "Projects" },
    { href: "#skills", icon: "skills", label: "Skills" },
    { href: "#contact", icon: "phone", label: "Contact" },
  ],
  contact: {
    social: [
      { name: "GitHub", url: `${contactsData.github}`, icon: "github" },
      { name: "LinkedIn", url: `${contactsData.linkedIn}`, icon: "linkedin" },
      { name: "X", url: `${contactsData.twitter}`, icon: "x" },
      { name: "Email", url: `${contactsData.email}`, icon: "email" },
    ],
  },
}

// DockItem Component for each link
const DockItem = ({ icon: Icon, label, href }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center justify-center"
    >
      <motion.a
        href={href}
        className="flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors hover:bg-white/20"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Icon className="h-6 w-6" />
      </motion.a>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute -right-10 rounded-md bg-gray-800 px-2 py-1 text-xs text-white"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

// Divider Component
const Divider = () => (
  <div className="mx-1 h-px w-8 bg-white/50" />
)

// SideNavbar Component
const SideNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollThreshold = 50; // Set the threshold for scrolling

  // Track scroll position
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > scrollThreshold ) {
        setIsVisible(true); 
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`flex fixed md:h-full ml-4 flex-row items-center justify-center z-[100] transition-all duration-300`}>
      <motion.ul
        className={`flex flex-col items-center space-y-1 rounded-2xl bg-black/20 p-2 backdrop-blur-md border border-[#7790eaa0] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {DATA.navbar.map((item) => (
          <DockItem key={item.label} icon={Icons[item.icon]} label={item.label} href={item.href} />
        ))}
        <Divider />
        {DATA.contact.social.map((item) => (
          <DockItem key={item.name} icon={Icons[item.icon]} label={item.name} href={item.url} />
        ))}
      </motion.ul>
    </div>
  );
};

export default SideNavbar;
