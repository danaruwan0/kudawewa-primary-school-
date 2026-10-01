import "./navbar.css";
import schoolLogo from "./../../assets/logo.jpeg";

import React, { useState } from "react";


import {
    FiPhone,
    FiMail,
    FiGlobe,
    FiLock,
    FiHome,
    FiMenu,
    FiX,
    FiBell,
    FiChevronRight,
} from "react-icons/fi";


import { useLanguage } from "../../context/LanguageContext";

export default function NavBar() {
    const { language, changeLanguage, t } = useLanguage();

    // Mobile menu state
    const [menuOpen, setMenuOpen] = useState(false);

    /* =========================================================
       NAVIGATION ITEMS
    ========================================================= */

    const navItems = [
        {
            label: t.home,
            href: "#home",
            icon: <FiHome />,
        },
        {
            label: t.about,
            href: "#about",
        },
        {
            label: t.teachers,
            href: "#teachers",
        },
        {
            label: t.grades,
            href: "#grades",
        },
        {
            label: t.news,
            href: "#news",
        },
        {
            label: t.students,
            href: "#students",
        },
        {
            label: t.achievements,
            href: "#achievements",
        },
        {
            label: t.gallery,
            href: "#gallery",
        },
        {
            label: t.downloads,
            href: "#downloads",
        },
        {
            label: t.notices,
            href: "#notices",
        },
    ];

    /* =========================================================
       CLOSE MOBILE MENU
    ========================================================= */

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="school-navbar">

            {/* =====================================================
          TOP BAR
      ===================================================== */}

            <div className="navbar-top">
                <div className="navbar-top-inner">

                    {/* Government / Authority */}
                    <div className="school-authority">
                        <FiHome className="authority-icon" />

                        <span>{t.authority}</span>
                    </div>


                    {/* Contact + Language */}
                    <div className="top-right">

                        <a
                            href={`tel:${t.phone.replace(/-/g, "")}`}
                            className="top-contact"
                        >
                            <FiPhone />

                            <span>{t.phone}</span>
                        </a>


                        <a
                            href={`mailto:${t.email}`}
                            className="top-contact email-contact"
                        >
                            <FiMail />

                            <span>{t.email}</span>
                        </a>


                        {/* Desktop Language Switcher */}
                        <div className="language-switcher">

                            <FiGlobe className="language-icon" />

                            <button
                                type="button"
                                className={language === "si" ? "active" : ""}
                                onClick={() => changeLanguage("si")}
                            >
                                සිංහල
                            </button>

                            <span className="language-divider">|</span>

                            <button
                                type="button"
                                className={language === "en" ? "active" : ""}
                                onClick={() => changeLanguage("en")}
                            >
                                English
                            </button>

                        </div>

                    </div>
                </div>
            </div>


            {/* =====================================================
          MAIN SCHOOL HEADER
      ===================================================== */}

            <div className="school-main-header">

                {/* LEFT SIDE - ONLY SCHOOL LOGO */}
                <div className="school-brand">

                    <img
                        src={schoolLogo}
                        alt={t.schoolLogoAlt}
                        className="school-logo"
                    />


                    <div className="school-title">

                        <div className="school-ministry">
                            {t.ministry}
                        </div>

                        <h1>{t.schoolName}</h1>

                        <p>{t.location}</p>

                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="header-actions">

                    <button
                        type="button"
                        className="portal-button"
                    >
                        <FiLock />

                        <span>{t.portal}</span>
                    </button>


                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="mobile-menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={t.menu}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                </div>

            </div>


            {/* =====================================================
          NAVIGATION
      ===================================================== */}

            <nav
                className={`main-navigation ${menuOpen ? "open" : ""
                    }`}
            >

                <div className="nav-container">

                    {/* Desktop / Mobile Home */}
                    <a
                        href="#home"
                        className="home-button"
                        onClick={closeMenu}
                    >
                        <FiHome />

                        <span>{t.home}</span>
                    </a>


                    {/* Navigation Links */}
                    <div className="nav-links">

                        {navItems.slice(1).map((item, index) => (
                            <a
                                href={item.href}
                                key={index}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </a>
                        ))}

                    </div>


                    {/* =================================================
              MOBILE MENU EXTRA CONTENT
          ================================================= */}

                    <div className="mobile-menu-extra">

                        {/* Portal */}
                        <button
                            type="button"
                            className="mobile-portal-button"
                        >
                            <span className="mobile-menu-icon">
                                <FiLock />
                            </span>

                            <span>{t.portal}</span>

                            <FiChevronRight className="mobile-arrow" />
                        </button>


                        {/* Mobile Language */}
                        <div className="mobile-language">

                            <div className="mobile-language-title">
                                <FiGlobe />

                                <span>{t.language}</span>
                            </div>


                            <div className="mobile-language-buttons">

                                <button
                                    type="button"
                                    className={
                                        language === "si"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        changeLanguage("si")
                                    }
                                >
                                    සිංහල
                                </button>


                                <button
                                    type="button"
                                    className={
                                        language === "en"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        changeLanguage("en")
                                    }
                                >
                                    English
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </nav>


            {/* =====================================================
          ANNOUNCEMENT BAR
      ===================================================== */}

            <div className="announcement-bar">

                <div className="announcement-inner">

                    <div className="announcement-left">

                        <span className="announcement-label">
                            {t.specialNotice}
                        </span>


                        <FiBell className="announcement-icon" />


                        <strong>
                            {t.announcementTitle}
                        </strong>


                        <span className="announcement-text">
                            {t.announcementText}
                        </span>

                    </div>


                    <a
                        href="#notices"
                        className="announcement-link"
                    >
                        <span>{t.viewDetails}</span>

                        <FiChevronRight />
                    </a>

                </div>

            </div>

        </header>
    );
}