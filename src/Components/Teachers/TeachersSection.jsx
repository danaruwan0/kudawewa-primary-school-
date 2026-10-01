import {
    FiUsers,
    FiAward,
    FiBookOpen,
    FiCalendar
} from "react-icons/fi";

import { useLanguage } from "../../context/LanguageContext";

import TeacherCard from "./TeacherCard";

import "./teachers.css";


function TeachersSection() {

    const { t } = useLanguage();


    const teachers = [
        {
            name: "ප්‍රධාන ආචාර්යතුමා",
            role: t.teacherPrincipal,
            subject: t.teacherAdministration,
            experience: t.teacherLeadership,
            initial: "ප්‍ර"
        },
        {
            name: "එම්. ඒ. ගුරු මහත්මිය",
            role: t.teacherSenior,
            subject: t.teacherPrimaryEducation,
            experience: t.teacherExperience10,
            initial: "ගු"
        },
        {
            name: "ඩබ්. පී. ගුරු මහත්මිය",
            role: t.teacherSenior,
            subject: t.teacherPrimaryEducation,
            experience: t.teacherExperience8,
            initial: "ගු"
        },
        {
            name: "ආර්. එම්. ගුරු මහත්මිය",
            role: t.teacherTeacher,
            subject: t.teacherPrimaryEducation,
            experience: t.teacherExperience5,
            initial: "ගු"
        },
        {
            name: "කේ. ඩී. ගුරු මහත්මිය",
            role: t.teacherTeacher,
            subject: t.teacherPrimaryEducation,
            experience: t.teacherExperience5,
            initial: "ගු"
        },
        {
            name: "එච්. එම්. ගුරු මහතා",
            role: t.teacherTeacher,
            subject: t.teacherPrimaryEducation,
            experience: t.teacherExperience4,
            initial: "ගු"
        }
    ];


    return (
        <section className="teachers-section">

            <div className="teachers-container">


                {/* =========================
                    HEADER
                ========================== */}

                <div className="teachers-header">

                    <div className="teachers-heading">

                        <span className="teachers-eyebrow">
                            {t.teachersEyebrow}
                        </span>

                        <h2>
                            {t.teachersTitle}
                        </h2>

                        <p>
                            {t.teachersDescription}
                        </p>

                    </div>


                    <div className="teachers-header-badge">

                        <FiUsers />

                        <div>

                            <strong>
                                12+
                            </strong>

                            <span>
                                {t.teacherTeam}
                            </span>

                        </div>

                    </div>

                </div>


                {/* =========================
                    STAT CARDS
                ========================== */}

                <div className="teachers-stats">

                    <div className="teacher-stat">

                        <div className="teacher-stat-icon">
                            <FiUsers />
                        </div>

                        <div>
                            <strong>12+</strong>
                            <span>{t.statsTeachers}</span>
                        </div>

                    </div>


                    <div className="teacher-stat">

                        <div className="teacher-stat-icon">
                            <FiBookOpen />
                        </div>

                        <div>
                            <strong>1 - 5</strong>
                            <span>{t.teacherGrades}</span>
                        </div>

                    </div>


                    <div className="teacher-stat">

                        <div className="teacher-stat-icon">
                            <FiAward />
                        </div>

                        <div>
                            <strong>40+</strong>
                            <span>{t.teacherYears}</span>
                        </div>

                    </div>


                    <div className="teacher-stat">

                        <div className="teacher-stat-icon">
                            <FiCalendar />
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>{t.teacherCommitment}</span>
                        </div>

                    </div>

                </div>


                {/* =========================
                    TEACHER GRID
                ========================== */}

                <div className="teachers-grid">

                    {teachers.map((teacher, index) => (

                        <TeacherCard
                            key={index}
                            teacher={teacher}
                        />

                    ))}

                </div>


                {/* =========================
                    BOTTOM MESSAGE
                ========================== */}

                <div className="teachers-bottom">

                    <div className="teachers-bottom-icon">
                        <FiAward />
                    </div>

                    <div>

                        <h3>
                            {t.teacherBottomTitle}
                        </h3>

                        <p>
                            {t.teacherBottomDescription}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default TeachersSection;