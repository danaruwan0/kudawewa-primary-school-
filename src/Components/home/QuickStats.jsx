import {
    FiBook,
    FiUsers,
    FiAward,
    FiCalendar
} from "react-icons/fi";

import "./home.css";
import { useLanguage } from "../../context/LanguageContext";

const stats = [
    { icon: <FiBook />, number: "1 - 5", titleKey: "statsGrades", descriptionKey: "statsGradesDescription" },
    { icon: <FiUsers />, number: "185+", titleKey: "statsStudents", descriptionKey: "statsStudentsDescription" },
    { icon: <FiAward />, number: "12", titleKey: "statsTeachers", descriptionKey: "statsTeachersDescription" },
    { icon: <FiCalendar />, number: "40+", titleKey: "statsYears", descriptionKey: "statsYearsDescription" }
];

function QuickStats() {
    const { t } = useLanguage();

    return (
        <section className="stats-section">

            <div className="stats-container">

                {stats.map((stat, index) => (
                    <div className="stat-card" key={index}>

                        <div className="stat-icon">
                            {stat.icon}
                        </div>

                        <div className="stat-content">
                            <span className="stat-number">
                                {stat.number}
                            </span>

                            <h3>
                                {t[stat.titleKey]}
                            </h3>

                            <p>
                                {t[stat.descriptionKey]}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default QuickStats;