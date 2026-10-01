import NavBar from "../Components/navBar/NavBar.jsx";

import Home from "../pages/home/Home.jsx";
import AboutSchoolPage from "../pages/AboutSchool/AboutSchool.jsx";
import TeachersPage from "../pages/Teachers/Teachers.jsx";

import "./App.css";

import { LanguageProvider } from "../context/LanguageContext.jsx";


function App() {
  return (

    <LanguageProvider>

      <div className="app">

        <NavBar />

        <Home />

        <AboutSchoolPage />

        <TeachersPage />

      </div>

    </LanguageProvider>

  );
}

export default App;


