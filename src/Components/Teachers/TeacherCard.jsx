import {
    FiBookOpen,
    FiMail
} from "react-icons/fi";

import { useLanguage } from "../../context/LanguageContext";

function TeacherCard({ teacher }) {

    const { t } = useLanguage();

    return (
        <article className="teacher-card">

            {/* Teacher Image */}

            <div className="teacher-image-wrapper">

                {teacher.image ? (
                    <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="teacher-image"
                    />
                ) : (
                    <div className="teacher-avatar">
                        {teacher.initial}
                    </div>
                )}

                <span className="teacher-status">
                    {t.teacherActive}
                </span>

            </div>


            {/* Teacher Information */}

            <div className="teacher-card-content">

                <span className="teacher-role">
                    {teacher.role}
                </span>

                <h3>
                    {teacher.name}
                </h3>

                <div className="teacher-subject">

                    <FiBookOpen />

                    <span>
                        {teacher.subject}
                    </span>

                </div>


                <div className="teacher-card-footer">

                    <span className="teacher-experience">
                        {teacher.experience}
                    </span>

                    <button
                        type="button"
                        className="teacher-contact-button"
                        aria-label={t.teacherContact}
                    >
                        <FiMail />
                    </button>

                </div>

            </div>

        </article>
    );
}

export default TeacherCard;