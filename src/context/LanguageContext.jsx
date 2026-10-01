import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

/*
 * All user-facing text for the website lives here.
 * To add/change a translation, edit this file only.
 */
export const languageContent = {
    si: {
        // NAVBAR
        authority: "ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජය",
        ministry: "ශ්‍රී ලංකා අධ්‍යාපන අමාත්‍යාංශය",
        schoolName: "පො/දිඹු/කුඩාවැව ප්‍රාථමික විද්‍යාලය",
        location: "කුඩාවැව, දළුකන, පොළොන්නරුව",
        phone: "027-2259102",
        email: "info@kudawewaprimary.sch.lk",
        portal: "පාසල් කළමනාකරණ පද්ධතිය",
        home: "මුල් පිටුව",
        about: "අප ගැන",
        teachers: "ගුරු මණ්ඩලය",
        grades: "ශ්‍රේණි (1-5)",
        news: "ප්‍රවෘත්ති සහ විශේෂාංග",
        students: "සිසුන් සහ දින දර්ශනය",
        achievements: "ජයග්‍රහණ",
        gallery: "ඡායාරූප ගැලරිය",
        downloads: "බාගත කිරීම්",
        notices: "දැනුම්දීම්",
        specialNotice: "විශේෂ නිවේදනය",
        announcementTitle: "නව පාසල් වාරය: 2025",
        announcementText: "පළමු ශ්‍රේණියේ සිසුන් ඇතුළත් කරගැනීමේ අයදුම්පත් දැන් ලබා ගත හැකියි",
        viewDetails: "අදාළ විස්තර බලන්න",
        menu: "මෙනුව",
        language: "භාෂාව",
        sinhala: "සිංහල",
        english: "English",
        schoolLogoAlt: "කුඩාවැව ප්‍රාථමික විද්‍යාලය",

        // HOME
        homeEducationBadge: "ශ්‍රී ලංකා අධ්‍යාපන පද්ධතිය",
        homeWelcomeTitle: "අපේ පාසලට",
        homeWelcomeTitleAccent: "සාදරයෙන් පිළිගනිමු",
        homeDescription: "පො/දිඹු/කුඩාවැව ප්‍රාථමික විද්‍යාලය වෙත ඔබව සාදරයෙන් පිළිගනිමු. දරුවන්ගේ දැනුම, කුසලතා සහ යහපත් ගුණාංග වර්ධනය කිරීම සඳහා අපි කැපවී සිටිමු.",
        homeAboutButton: "පාසල ගැන දැනගන්න",
        homeNoticeButton: "විශේෂ නිවේදන",
        homeLocation: "කුඩාවැව, දළුකන, පොළොන්නරුව",
        schoolSlogan: "අපේ පාසල • අපේ දරුවන් • අපේ අනාගතය",
        gradesLabel: "ශ්‍රේණි",
        schoolImageAlt: "කුඩාවැව ප්‍රාථමික විද්‍යාලය",

        // HOME STATS
        statsGrades: "ප්‍රාථමික ශ්‍රේණි",
        statsGradesDescription: "1 සිට 5 ශ්‍රේණිය දක්වා",
        statsStudents: "සිසුන්",
        statsStudentsDescription: "අපේ පාසලේ සිසුන්",
        statsTeachers: "ගුරුවරුන්",
        statsTeachersDescription: "අධ්‍යාපනය ලබාදෙන ගුරු මණ්ඩලය",
        statsYears: "වසර",
        statsYearsDescription: "අධ්‍යාපන සේවයේ ගමන",

        // ABOUT
        aboutEyebrow: "අප ගැන",
        aboutTitle: "අපේ පාසල පිළිබඳව",
        aboutDescription: "කුඩාවැව ප්‍රාථමික විද්‍යාලය පිළිබඳ තොරතුරු සහ අපගේ අධ්‍යාපනික දැක්ම.",
        aboutQuote: "දරුවන්ගේ අනාගතය වෙනුවෙන් අද අපි කරන ආයෝජනය",
        aboutHeading: "දැනුමෙන්, ගුණයෙන් සහ කුසලතාවයෙන් සපිරි දරු පරපුරක් බිහි කිරීම",
        aboutParagraphOne: "පො/දිඹු/කුඩාවැව ප්‍රාථමික විද්‍යාලය යනු ප්‍රදේශයේ දරුවන් සඳහා ප්‍රාථමික අධ්‍යාපනය ලබාදෙන අධ්‍යාපන ආයතනයකි.",
        aboutParagraphTwo: "අපගේ අරමුණ වන්නේ දරුවන්ගේ අධ්‍යාපනික දැනුම පමණක් නොව, ඔවුන්ගේ නිර්මාණශීලීත්වය, සමාජීය හැකියාවන්, නායකත්ව ගුණාංග සහ යහපත් ආකල්ප වර්ධනය කිරීමයි.",
        featureOne: "දරුවන්ගේ දැනුම හා කුසලතා වර්ධනය",
        featureTwo: "ගුණාත්මක ප්‍රාථමික අධ්‍යාපනය",
        featureThree: "දරුවා කේන්ද්‍ර කරගත් ඉගෙනුම් පරිසරය",
        featureFour: "සමාජීය හා සදාචාරාත්මක වටිනාකම් වර්ධනය",
        teachersButton: "ගුරු මණ්ඩලය",
        galleryButton: "ඡායාරූප ගැලරිය",
        visionTitle: "අපගේ දැක්ම",
        visionText: "දැනුමෙන් හා ගුණයෙන් පිරිපුන්, සමාජයට වැඩදායී දරු පරපුරක් බිහි කිරීම.",
        missionTitle: "අපගේ මෙහෙවර",
        missionText: "සෑම දරුවෙකුටම ගුණාත්මක අධ්‍යාපනයක් සහ සුරක්ෂිත ඉගෙනුම් පරිසරයක් ලබාදීම.",


        //techers

        teacherActive: "සේවයේ නිරත",
        teacherContact: "සම්බන්ධ වන්න",

        teachersEyebrow: "ගුරු මණ්ඩලය",

        teachersTitle:
            "අපගේ කැපවූ ගුරු මණ්ඩලය",

        teachersDescription:
            "දරුවන්ගේ දැනුම, කුසලතා සහ යහපත් ගුණාංග වර්ධනය කිරීම සඳහා කැපවී සිටින අපගේ ගුරු මණ්ඩලය.",

        teacherTeam:
            "ගුරු මණ්ඩලය",

        teacherPrincipal:
            "ප්‍රධාන ආචාර්ය",

        teacherAdministration:
            "පාසල් පරිපාලනය",

        teacherSenior:
            "ජ්‍යෙෂ්ඨ ගුරු",

        teacherTeacher:
            "ගුරු",

        teacherPrimaryEducation:
            "ප්‍රාථමික අධ්‍යාපනය",

        teacherLeadership:
            "පරිපාලන අත්දැකීම්",

        teacherExperience10:
            "වසර 10+ අත්දැකීම්",

        teacherExperience8:
            "වසර 8+ අත්දැකීම්",

        teacherExperience5:
            "වසර 5+ අත්දැකීම්",

        teacherExperience4:
            "වසර 4+ අත්දැකීම්",

        teacherGrades: "ශ්‍රේණි 1 - 5",

        teacherYears: "අධ්‍යාපන අත්දැකීම්",

        teacherCommitment: "දරුවන් වෙනුවෙන් කැපවීම",

        teacherBottomTitle: "දරුවන්ගේ අනාගතය ගොඩනගන ගුරු මණ්ඩලය",

        teacherBottomDescription:
            "අපගේ ගුරුවරුන් සෑම දරුවෙකුගේම හැකියාව හඳුනාගෙන ඔවුන්ට සුදුසු ඉගෙනුම් පරිසරයක් ලබාදීමට කැපවී සිටී.",
    },

    en: {
        // NAVBAR
        authority: "Democratic Socialist Republic of Sri Lanka",
        ministry: "Ministry of Education, Sri Lanka",
        schoolName: "Po/Dimbu/Kudawewa Primary School",
        location: "Kudawewa, Dalukana, Polonnaruwa",
        phone: "027-2259102",
        email: "info@kudawewaprimary.sch.lk",
        portal: "School Management System",
        home: "Home",
        about: "About Us",
        teachers: "Teachers",
        grades: "Grades (1-5)",
        news: "News & Events",
        students: "Students & Calendar",
        achievements: "Achievements",
        gallery: "Gallery",
        downloads: "Downloads",
        notices: "Notices",
        specialNotice: "Special Notice",
        announcementTitle: "New School Term: 2025",
        announcementText: "Applications for Grade One admissions are now available",
        viewDetails: "View Details",
        menu: "Menu",
        language: "Language",
        sinhala: "සිංහල",
        english: "English",
        schoolLogoAlt: "Kudawewa Primary School",

        // HOME
        homeEducationBadge: "Sri Lankan Education System",
        homeWelcomeTitle: "Welcome to",
        homeWelcomeTitleAccent: "Our School",
        homeDescription: "Welcome to Po/Dimbu/Kudawewa Primary School. We are committed to developing children's knowledge, skills and good values.",
        homeAboutButton: "Learn About Our School",
        homeNoticeButton: "Special Notices",
        homeLocation: "Kudawewa, Dalukana, Polonnaruwa",
        schoolSlogan: "Our School • Our Children • Our Future",
        gradesLabel: "Grades",
        schoolImageAlt: "Kudawewa Primary School",

        // HOME STATS
        statsGrades: "Primary Grades",
        statsGradesDescription: "Grades 1 to 5",
        statsStudents: "Students",
        statsStudentsDescription: "Students in our school",
        statsTeachers: "Teachers",
        statsTeachersDescription: "Our teaching staff",
        statsYears: "Years",
        statsYearsDescription: "Our educational journey",

        // ABOUT
        aboutEyebrow: "About Us",
        aboutTitle: "About Our School",
        aboutDescription: "Information about Kudawewa Primary School and our educational vision.",
        aboutQuote: "Our investment in the future of children begins today",
        aboutHeading: "Building a generation rich in knowledge, values and skills",
        aboutParagraphOne: "Po/Dimbu/Kudawewa Primary School is an educational institution providing primary education for children in the local community.",
        aboutParagraphTwo: "Our goal is not only to develop children's academic knowledge, but also their creativity, social skills, leadership qualities and positive attitudes.",
        featureOne: "Developing children's knowledge and skills",
        featureTwo: "Quality primary education",
        featureThree: "Child-centered learning environment",
        featureFour: "Developing social and moral values",
        teachersButton: "Our Teachers",
        galleryButton: "Photo Gallery",
        visionTitle: "Our Vision",
        visionText: "To build a generation of knowledgeable, well-rounded and socially responsible children.",
        missionTitle: "Our Mission",
        missionText: "To provide every child with quality education and a safe learning environment.",


        //techers
        teacherActive: "Active",
        teacherContact: "Contact teacher",

        teachersEyebrow: "OUR TEACHERS",

        teachersTitle:
            "Our Dedicated Teaching Team",

        teachersDescription:
            "Our teachers are committed to developing the knowledge, skills and values of every child.",

        teacherTeam:
            "Teaching Team",

        teacherPrincipal:
            "Principal",

        teacherAdministration:
            "School Administration",

        teacherSenior:
            "Senior Teacher",

        teacherTeacher:
            "Teacher",

        teacherPrimaryEducation:
            "Primary Education",

        teacherLeadership:
            "Leadership Experience",

        teacherExperience10:
            "10+ years experience",

        teacherExperience8:
            "8+ years experience",

        teacherExperience5:
            "5+ years experience",

        teacherExperience4:
            "4+ years experience",

        teacherGrades:
            "Grades 1 - 5",

        teacherYears:
            "Teaching Experience",

        teacherCommitment:
            "Commitment to Children",

        teacherBottomTitle:
            "Teachers Building the Future of Our Children",

        teacherBottomDescription:
            "Our teachers are committed to identifying every child's potential and creating a supportive learning environment.",


    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem("school-language");
        return savedLanguage === "en" || savedLanguage === "si" ? savedLanguage : "si";
    });

    useEffect(() => {
        localStorage.setItem("school-language", language);
        document.documentElement.lang = language === "si" ? "si" : "en";
    }, [language]);

    const changeLanguage = (lang) => {
        if (languageContent[lang]) {
            setLanguage(lang);
        }
    };

    const value = useMemo(
        () => ({ language, changeLanguage, t: languageContent[language] }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}
