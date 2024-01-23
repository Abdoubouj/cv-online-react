import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdAddCircleOutline, MdArrowRightAlt, MdDeleteOutline } from 'react-icons/md';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Experiences = ({sendData}) => {
  const [experiences,setExperiences] = useState([]);
  const [isUpdate,setIsUpdate] = useState(false);
  const [id,setId] = useState(1);
  const [company,setCompany] = useState("");
  const [role,setRole] = useState("");
  const [description ,setDescription] = useState("");
  const [startDate ,setStartDate] = useState("");
  const [endDate ,setEndDate] = useState("");
  const [present , setPresent] = useState(false);
  
  useDocumentTitle("experiences");

  const handleClick = ()=>{
    if(!isUpdate){
      if(present){
        setExperiences([...experiences,{id,company,role,description,startDate,present}]);
    }else{
      setExperiences([...experiences,{id,company,role,description,startDate,endDate}]);
    }
    setCompany("");
    setRole("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setPresent(false);
    setId((prev)=>prev+1);
  }else{
    setExperiences((prev)=>{
      return prev.map((exp)=>{
        if(exp.id === id){
          return {...exp,...{id,company,role,description,startDate,present,endDate}}
        }
        return exp;
      })
    })
    setCompany("");
    setRole("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setPresent(false);
    setId(experiences.length + 1);
    setIsUpdate(false);
  }
  }
  const handleRemove = (expId) =>{
    setExperiences([...experiences.filter((exp)=>exp.id !== expId)]);
    setCompany("");
    setRole("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setPresent(false);
    setId(experiences.length + 1);
    setIsUpdate(false);
  }
  const handleUpdate = (exp) => {
    setIsUpdate(true);
    setId(exp.id);
    setCompany(exp.company);
    setRole(exp.role);
    setDescription(exp.description);
    setStartDate(exp.startDate);
    setEndDate(exp.endDate);
    setPresent(exp.present);
  };
  sendData(experiences);
  console.log(experiences);
  return (
       <section className="skills-section">
                <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>can you fill all inputs</h6>
      <div className="flex gap-5 justify-center flex-wrap">
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="company"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            company
          </label>
          <input
            type="text"
            placeholder="enter company name"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="role"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            role
          </label>
          <input
            type="text"
            placeholder="enter your role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="description"
            className="font-[700] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            description
          </label>
          <textarea placeholder='enter your experience description' value={description} onChange={(e)=>setDescription(e.target.value)} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' cols="20" rows="5"></textarea>
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
              <FiEdit className="text-[20px]" /> update experience
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <MdAddCircleOutline className="text-[20px]" /> add experience
            </span>
          )}
        </button>
      </div>
        <div className="experiences-list mt-5 flex flex-wrap items-center gap-3">
          {experiences.map((exp)=>(
            <div className="experiences-item dark:text-slate-50 max-w-[250px] w-full capitalize border-[1px] border-slate-300  dark:border-slate-500 rounded-md p-3">
              <div className="study-duration mb-2 text-[14px] flex gap-3 justify-center items-center">
                <span>{exp.startDate}</span>
                <span className='text-[30px]'><MdArrowRightAlt /></span>
                {exp.present ?
                <span>currently</span>
                : <span>{exp.endDate}</span>
              }
              </div>
              <p className="company mb-2 p-1 border-[1px] border-slate-300 dark:border-slate-500 rounded-md">company : <strong>{exp.company}</strong></p>
              <p className="role mb-2 p-1 border-[1px] border-slate-300 dark:border-slate-500 rounded-md">role : <strong>{exp.role}</strong></p>
              <p className="description mb-2 p-1 border-[1px] border-slate-300 dark:border-slate-500 rounded-md">description : <strong>{exp.description}</strong></p>
              <div className="actions flex gap-2 items-center p-2">
              <button
                className="border-[1px] flex justify-center py-3 w-1/2 border-green-600 rounded-lg text-green-600 p-2"
                onClick={() => {
                  handleUpdate(exp);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="border-[1px] w-1/2 flex justify-center py-3 border-red-600 rounded-lg text-red-600 p-2"
                onClick={() => {
                  handleRemove(exp.id);
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

export default Experiences