import { FiArrowRight, FiBookOpen, FiMapPin } from "react-icons/fi";
import "./home.css";

import schoolImage from "../../assets/school.jpg";
import { useLanguage } from "../../context/LanguageContext";

function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="hero-section">
            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-content">

                    <div className="hero-small-badge">
                        <FiBookOpen />
                        <span>{t.homeEducationBadge}</span>
                    </div>

                    <h1>
                        {t.homeWelcomeTitle}
                        <span> {t.homeWelcomeTitleAccent}</span>
                    </h1>

                    <p className="hero-description">
                        {t.homeDescription}
                    </p>

                    <div className="hero-buttons">

                        <a href="#about" className="hero-primary-button">
                            {t.homeAboutButton}
                            <FiArrowRight />
                        </a>

                        <a href="#notices" className="hero-secondary-button">
                            {t.homeNoticeButton}
                        </a>

                    </div>

                    <div className="hero-location">
                        <FiMapPin />
                        <span>
                            {t.homeLocation}
                        </span>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="hero-image-wrapper">

                    <div className="hero-image-card">

                        <img
                            src={schoolImage}
                            alt={t.schoolImageAlt}
                        />

                        <div className="hero-image-overlay">
                            <div>
                                <strong>{t.schoolName}</strong>
                                <span>{t.schoolSlogan}</span>
                            </div>
                        </div>

                    </div>

                    <div className="hero-floating-card">
                        <span className="floating-number">1 - 5</span>
                        <span className="floating-label">
                            {t.gradesLabel}
                        </span>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HeroSection;