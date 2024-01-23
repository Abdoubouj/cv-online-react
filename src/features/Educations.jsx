import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdAddCircleOutline, MdArrowRightAlt, MdDeleteOutline } from 'react-icons/md';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Educations = ({sendData}) => {
  // const [educations,setEducations] = useState([]);
  // const [isUpdate,setIsUpdate] = useState(false);
  // const [id,setId] = useState(1);
  // const [school,setSchool] = useState("");
  // const [degree,setDegree] = useState("");
  // const [field ,setField] = useState("");
  // const [startDate ,setStartDate] = useState("");
  // const [endDate ,setEndDate] = useState("");
  // const [present , setPresent] = useState(false);
  
  useDocumentTitle("educations");
  const handleClick = ()=>{
    if(!isUpdate){
      if(present){
        setEducations([...educations,{id,school,degree,field,startDate,present}]);
    }else{
      setEducations([...educations,{id,school,degree,field,startDate,endDate}]);
    }
    setSchool("");
    setDegree("");
    setField("");
    setStartDate("");
    setEndDate("");
    setPresent(false);
    setId((prev)=>prev+1);
  }else{
    setEducations((prev)=>{
      return prev.map((edu)=>{
        if(edu.id === id){
          return {...edu,...{id,school,degree,field,startDate,present,endDate}}
        }
        return edu;
      })
    })
    setSchool("");
    setDegree("");
    setField("");
    setStartDate("");
    setEndDate("");
    setPresent(false);
    setId(educations.length + 1);
    setIsUpdate(false);
  }
  }
  const handleRemove = (eduId) =>{
    setEducations([...educations.filter((edu)=>edu.id !== eduId)]);
    setSchool("");
    setDegree("");
    setField("");
    setStartDate("");
    setEndDate("");
    setPresent(false);
    setId(educations.length + 1);
    setIsUpdate(false);
  }
  const handleUpdate = (edu) => {
    setIsUpdate(true);
    setId(edu.id);
    setSchool(edu.school);
    setDegree(edu.degree);
    setField(edu.field);
    setStartDate(edu.startDate);
    setEndDate(edu.endDate);
    setPresent(edu.present);
  };
  sendData(educations);
  console.log(educations);
  return (
       <section className="skills-section">
                <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>can you fill all inputs</h6>
      <div className="flex gap-5 justify-center flex-wrap">
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="school"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            school
          </label>
          <input
            type="text"
            placeholder="enter school name"
            value={school}
            onChange={(e) => {
              setSchool(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="degree"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            degree
          </label>
          <input
            type="text"
            placeholder="enter your degree"
            value={degree}
            onChange={(e) => {
              setDegree(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="field"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            field
          </label>
          <input
            type="text"
            placeholder="enter field of study "
            value={field}
            onChange={(e) => {
              setField(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="startDate"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            start date
          </label>
          <input
            type="date"
            placeholder="enter startDate name"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        
        <div className="mb-3 flex items-center gap-2 w-[40%]">
          <input
            type="checkbox"
            // placeholder="enter endDate name"
            value={present}
            checked={present ? true :false}
            onChange={(e) => {
              setPresent(!present);
            }}
            className='peer/present'
            // className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        <label
          htmlFor="present"
          className="peer-checked/present:text-mainColor font-[700] text-slate-900 capitalize  dark:text-slate-50"
        >
          present
        </label>
      </div>
      {!present &&
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="endDate"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            end date
          </label>
          <input
            type="date"
            placeholder="enter endDate name"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
            />
        </div>
          }
        </div>
        <div className="text-center mt-5">
        <button
          className={`${
            isUpdate ? "bg-green-600" : "bg-mainColor"
          } hover:opacity-80 transition-all duration-300 text-slate-50 rounded-md px-5 py-2 capitalize`}
          onClick={handleClick}
        >
          {isUpdate ? (
            <span className="flex items-center justify-center gap-3">
              <FiEdit className="text-[20px]" /> update education
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <MdAddCircleOutline className="text-[20px]" /> add education
            </span>
          )}
        </button>
      </div>
        <div className="educations-list mt-5 flex flex-wrap items-center gap-3">
          {educations.map((edu)=>(
            <div className="education-item dark:text-slate-50 max-w-[250px] w-full capitalize border-[1px] border-slate-300  dark:border-slate-500 rounded-md p-3">
              <div className="study-duration mb-2 text-[14px] flex gap-3 justify-center items-center">
                <span>{edu.startDate}</span>
                <span className='text-[30px]'><MdArrowRightAlt /></span>
                {edu.present ?
                <span>currently</span>
                : <span>{edu.endDate}</span>
              }
              </div>
              <p className="school mb-2 p-1 border-[1px] border-slate-300 dark:border-slate-500 rounded-md">school : <strong>{edu.school}</strong></p>
              <p className="degree mb-2 p-1 border-[1px] border-slate-300 dark:border-slate-500 rounded-md">degree : <strong>{edu.degree}</strong></p>
              <p className="field mb-2 p-1 border-[1px] border-slate-300 dark:border-slate-500 rounded-md">field : <strong>{edu.field}</strong></p>
              <div className="actions flex gap-2 items-center p-2">
              <button
                className="border-[1px] flex justify-center py-3 w-1/2 border-green-600 rounded-lg text-green-600 p-2"
                onClick={() => {
                  handleUpdate(edu);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="border-[1px] w-1/2 flex justify-center py-3 border-red-600 rounded-lg text-red-600 p-2"
                onClick={() => {
                  handleRemove(edu.id);
                }}
              >
                <MdDeleteOutline />
              </button>
            </div>
           </div>
             ))}
        </div>
        </section>
  )
}

export default Educations