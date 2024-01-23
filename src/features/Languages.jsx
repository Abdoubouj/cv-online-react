import React, { useState } from "react";
import { all_languages } from "../data/allLangagesData";
import { FiEdit } from "react-icons/fi";
import { MdAddCircleOutline, MdCancel, MdDeleteOutline } from "react-icons/md";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useForm } from "../hooks/useFormInput";
const Languages = ({languages,handleSetLanguages ,removeLanguage}) => {
  // const [isUpdate, setIsUpdate] = useState(false);
  // const [languages, setLanguages] = useState([]);
  // const [language, setLanguage] = useState("");
  // const [level, setLevel] = useState(0);
  // const [id, setId] = useState(1);
  const [languageIndex,setLanguageIndex] = useState(null);
  const [initialState , setInitialState] = useState({languageName:"",languageLevel:0});
  const {values,handleChange,errors ,isValid ,EmptyValues ,handleSetValues} = useForm(initialState);
  useDocumentTitle("languages");
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleSetLanguages(values ,languageIndex);
    setLanguageIndex(null);
    EmptyValues();
  }
  console.log(errors);
  // const handleClick = () => {
  //   if(!isUpdate){
  //     setLanguages([...languages, { id, language, level: parseInt(level) }]);
  //     setLanguage("");
  //     setLevel(0);
  //     setId((prev) => prev + 1);
  //   }else{
  //     setLanguages(prev=>{
  //       return prev.map((lang)=>{
  //         if(lang.id === id){
  //           return {...lang,...{id,language,level:parseInt(level)}}
  //         }
  //         return lang
  //       })
  //     })
  //     setLanguage("");
  //     setLevel(0);
  //     setId(languages.length +1);
  //     setIsUpdate(false);
  //   }
  // };
  // const handleRemove = (langId) => {
  //   setLanguages([...languages.filter((lang) => lang.id !== langId)]);
  //   setIsUpdate(false);
  //   setLanguage("");
  //   setLevel(0);
  //   setId([...languages].length + 1);
  // };
  // const handleUpdate = (lang)=>{
  //      setIsUpdate(!isUpdate);
  //      setId(lang.id);
  //      setLanguage(lang.language);
  //      setLevel(lang.level);
  //      if(isUpdate){
  //       setLanguage("");
  //       setLevel(0);
  //       setId([...languages].length + 1)
  //      }
  // }
  // sendData(languages);
  // console.log(languages);
  console.log(isValid);
  return (
    <section className="languages-section">
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>can you fill all inputs</h6>
      <form onSubmit={isValid ? handleSubmit : (e)=>{e.preventDefault()} } className="border-2 shadow-sm border-slate-200 rounded-2xl p-5 flex gap-5 flex-wrap justify-start items-center">
        <div className="mb-3 flex flex-col flex-1">
          <label
            htmlFor="language"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Language
          </label>
          <select
            value={values.languageName}
            onChange={handleChange}
            name="languageName"
            className="dark:bg-slate-800 dark:text-slate-100 border-[1px] border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          >
            {/* <option value="chose language here">chose language here</option> */}
            {all_languages.map((lang, index) => (
              <option value={lang?.name} key={index}>
                {lang?.name}
              </option>
            ))}
          </select>
          {errors.languageName && 
          <span className="text-red-600 mt-1">{errors.languageName}</span>
          }
        </div>
        <div className="mb-3 flex flex-col flex-1 relative">
          <label
            htmlFor="level"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Level
          </label>
          <input
            type="range"
            min={0}
            max={100}
            placeholder="enter"
            name="languageLevel"
            value={values.languageLevel}
            onChange={handleChange}
            className="bg-slate-50 dark:bg-slate-800"
          />
          <span className="absolute -top-[10px] left-[50%] bg-mainColor px-7 py-2 rounded-lg text-slate-50">
            {values.languageLevel}%
          </span>
          {errors.languageLevel && 
          <span className="text-red-600 mt-1">{errors.languageLevel}</span>
          }
        </div>
        {languageIndex !==null ? 
        <div className="flex w-full gap-5 justify-center">
        <button onClick={()=>{ handleSetLanguages(values ,languageIndex)}} className="flex items-center justify-center gap-3 shadow-lg bg-green-700 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize">
        <FiEdit/>
        <span>Update</span>
        </button>
        <button onClick={()=>{ setLanguageIndex(null) ; handleSetValues(initialState);}} className="flex items-center justify-center gap-3 shadow-lg bg-slate-800 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize">
        <MdCancel />
        <span>Cancel</span>
        </button>
        </div>
        :
        <button type="submit" className="flex items-center justify-center gap-3 shadow-lg bg-mainColor w-full hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize" role="submit">
          <span className="text-[20px]"><MdAddCircleOutline/></span>
          <span>Add Skill</span>
        </button>
      }
      </form>
      <div className="show-languages-list shadow-sm border-2 border-slate-200 rounded-xl  flex items-center flex-wrap gap-4 mt-6 p-5">
        {languages.map((lang , index) => (
          <div
            className="language-item border-2 border-slate-200 rounded-xl shadow-sm"
            key={index}
          >
            <div className="language dark:bg-slate-700 font-[600] py-1 text-center capitalize text-slate-500">
              {lang.languageName}
            </div>
            <div className="level level text-[12px] font-[600] leading-6 w-[40px] rounded-full h-[40px] mb-2 bg-slate-100 mx-auto py-2 text-center dark:text-slate-50">
              {lang.languageLevel}%
            </div>
            <hr />
            <div className="actions flex gap-2 items-center p-2">
              <button
                className="border-[1px] border-slate-400 rounded-lg text-slate-700 p-2"
                onClick={() => {
                  handleSetValues(lang);
                  setLanguageIndex(index);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="border-[1px] border-slate-400 rounded-lg text-slate-700 p-2"
                onClick={()=>removeLanguage(index)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
