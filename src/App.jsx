import './App.css'
import Header from './components/Header'
import {Routes , Route} from "react-router-dom"
import PersonnalInfo from './features/PersonnalInfo'
import Educations from './features/Educations'
import Experiences from './features/Experiences'
import Skills from './features/Skills'
import Languages from './features/Languages'
import {useState ,useRef } from 'react'
import Preview from './components/Preview'
// import { useLocalStorage } from './hooks/useLocalStorage'
import {FaDownload} from "react-icons/fa6"
import References from './features/References'
import { CvContextProvider } from './hooks/CvContext'
function App() {
  const printRef = useRef();
  // const [skills,setSkills] = useLocalStorage("skills",[]);
  // const [languages,setLanguages] = useLocalStorage("languages",[]);
  // const [personnalInfo , setPersonnalInfo] = useLocalStorage("personnalInfo",{});
  // const [educations,setEducations] = useLocalStorage("educations",[]);
  // const [experiences,setExperiences] = useLocalStorage("Experiences",[]);
  const [cvColor , setCvColor]  = useState("#172554");

  // remove skill //
//   const handleRemoveSkills = (index)=>{
//       const newData = [...skills];
//       newData.splice(index, 1);
//       setSkills(newData);
// }

// add skills or update skill //
//   const handleSkills = (skill , index)=>{
//     if(index !==null){
//        const data = [...skills];
//        data[index] = skill;
//        setSkills(data);
//     }else{
//       if(skills.filter((s)=> s.skillName === skill.skillName).length > 0){
//         alert("skill already exist")
//       }else{
//         setSkills([...skills,skill]);
//       }
//     }
// }

// // remove language //
// const handleRemoveLanguages = (index)=>{
//   const newData = [...languages];
//   newData.splice(index, 1);
//   setLanguages(newData);
// }
// // add langauges or update language //
// const handleLanguages = (language , index)=>{
//   if(index !==null){
//      const data = [...languages];
//      data[index] = language;
//      setLanguages(data);
//   }else{
//     if(languages.filter((lang)=> lang.languageName === language.languageName).length > 0){
//       alert("language already exist")
//     }else{
//       setLanguages([...languages,language]);
//     }
//   }
// }
// // add PersonnalInfo
// const handlePersonnalInfo = (info)=>{
//   setPersonnalInfo(info);
// }

// // add education
// const handleEducations = (education)=>{
//   setEducations([...educations,education]);
// }

// // add experience

// const handleExperiences = (experience) =>{
//   setExperiences([...experiences,experience]);
// }
// get background color from header :
const handleSetColor = (color)=>{
   setCvColor(color);
}

console.log(cvColor);
  return (
    <div className='container-app'>
    <Header handleSetColor={handleSetColor} printRef={printRef}/>
    <CvContextProvider>
    <main className='flex gap-5 p-2 dark:bg-slate-800'>
      <div className="content-left p-2 flex-1">
    <Routes>
      <Route path='/' element={<PersonnalInfo/>}/>
      {/* <Route path='/educations' element={<Educations handleSetEducations={handleEducations} educations={educations} />}/> */}
      {/* <Route path='/experiences' element={<Experiences handleSetExperiences={handleExperiences}/>} experiences={experiences} /> */}
      <Route path='/skills' element={<Skills/>}/>
      {/* <Route path='/languages' element={<Languages languages={languages} removeLanguage={handleRemoveLanguages} handleSetLanguages={handleLanguages}/>}/> */}
      {/* <Route path='/references' element={<References/>}/> */}
    </Routes>
      </div>
    <div className="content-right min-h-[800px] rounded-md shadow-2xl shadow-slate-950 dark:shadow-slate-50 w-[600px] flex-2">
      <Preview ref={printRef} cvColor={cvColor}/>
    </div>
    </main>
    </CvContextProvider>
    </div>
  )
}

export default App