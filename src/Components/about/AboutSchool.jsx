import {
    FiArrowRight,
    FiBookOpen,
    FiCheckCircle,
    FiMapPin
} from "react-icons/fi";

import SectionTitle from "../common/SectionTitle";
import "./about.css";

import principalImage from "../../assets/principal.jpg.jpg";
import { useLanguage } from "../../context/LanguageContext";

function AboutSchool() {
    const { t } = useLanguage();

    const features = [
        t.featureOne,
        t.featureTwo,
        t.featureThree,
        t.featureFour
    ];

    return (
        <section className="about-section">

            <div className="about-container">

                <SectionTitle
                    align="left"
                    eyebrow={t.aboutEyebrow}
                    title={t.aboutTitle}
                    description={t.aboutDescription}
                />

                <div className="about-main">

                    {/* IMAGE */}
                    <div className="about-image-area">

                        <div className="about-image-card">

                            <img
                                src={principalImage}
                                alt={t.schoolImageAlt}
                            />

                            <div className="about-image-label">
                                <FiMapPin />

                                <span>
                                    {t.homeLocation}
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* CONTENT */}
                    <div className="about-content">

                        <span className="about-quote">
                            {t.aboutQuote}
                        </span>

                        <h3>
                            {t.aboutHeading}
                        </h3>

                        <p>
                            {t.aboutParagraphOne}
                        </p>

                        <p>
                            {t.aboutParagraphTwo}
                        </p>

                        <div className="about-features">

                            {features.map((feature, index) => (
                                <div
                                    className="about-feature"
                                    key={index}
                                >
                                    <FiCheckCircle />

                                    <span>
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="about-actions">

                            <a
                                href="#teachers"
                                className="about-primary-button"
                            >
                                {t.teachersButton}
                                <FiArrowRight />
                            </a>

                            <a
                                href="#gallery"
                                className="about-secondary-button"
                            >
                                {t.galleryButton}
                            </a>

                        </div>

                    </div>

                </div>

                {/* MISSION / VISION */}
                <div className="about-values">

                    <div className="value-card">

                        <div className="value-icon">
                            <FiBookOpen />
                        </div>

                        <div>
                            <h4>{t.visionTitle}</h4>

                            <p>
                                {t.visionText}
                            </p>
                        </div>

                    </div>

                    <div className="value-card">

                        <div className="value-icon">
                            <FiCheckCircle />
                        </div>

                        <div>
                            <h4>{t.missionTitle}</h4>

                            <p>
                                {t.missionText}
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutSchool;