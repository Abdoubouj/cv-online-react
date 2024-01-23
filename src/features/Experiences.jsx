import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdAddCircleOutline, MdArrowRightAlt, MdDeleteOutline } from 'react-icons/md';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useForm } from '../hooks/useFormInput';

const Experiences = ({handleSetExperiences , experiences}) => {
  const [initialState , setInitialState] = useState({company:"",role:"",description:"",startDate:"",present:false,endDate:""});
  const {values,handleChange,errors ,isValid ,EmptyValues} = useForm(initialState);
  useDocumentTitle("experiences");
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleSetExperiences(values);
    EmptyValues();
  }


  return (
       <section className="skills-section">
       <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>Experiences</h6>
      <form onSubmit={isValid ? handleSubmit : (e)=>e.preventDefault()} className="flex gap-5 justify-center flex-wrap border-2 shadow-sm border-slate-200 rounded-2xl p-5 items-start">
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="company"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            company
          </label>
          <input
            type="text"
            placeholder="enter company name"
            value={values.company}
            name="company"
            onChange={handleChange}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
          {errors.company && 
          <span className="text-red-600 mt-1">{errors.company}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="role"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            role
          </label>
          <input
            type="text"
            placeholder="enter your role"
            name='role'
            value={values.role}
            onChange={handleChange}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
          {errors.role && 
          <span className="text-red-600 mt-1">{errors.role}</span>
          }
        </div>
        
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="startDate"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            start date
          </label>
          <input
            type="date"
            placeholder="enter startDate name"
            value={values.startDate}
            onChange={handleChange}
            name='startDate'
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
          {errors.startDate && 
          <span className="text-red-600 mt-1">{errors.startDate}</span>
          }
        </div>
      {!values.present &&
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="endDate"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            end date
          </label>
          <input
            type="date"
            placeholder="enter endDate name"
            value={values.endDate}
            name='endDate'
            onChange={handleChange}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
            />
        {errors.endDate && 
          <span className="text-red-600 mt-1">{errors.endDate}</span>
          }
        </div>
          }
          <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="description"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            description
          </label>
          <textarea placeholder='enter your experience description' name='description'  value={values.description} onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' cols="20" rows="5"></textarea>
          {errors.description && 
          <span className="text-red-600 mt-1">{errors.description}</span>
          }
        </div>
        <div className="mb-3 flex items-center gap-2 w-[40%]">
        <label
          htmlFor="present"
          className="peer-checked/present:text-mainColor font-[400] text-slate-900 capitalize  dark:text-slate-50"
        >
          present
        </label>
          <input
            type="checkbox"
            name='present'
            value={values.present}
            checked={values?.present ? true :false}
            onChange={handleChange}
            className='peer/present'
          />
        {errors.present && 
          <span className="text-red-600 mt-1">{errors.present}</span>
          }
      </div>
           <button type='submit' className='flex items-center justify-center gap-3 shadow-lg bg-mainColor w-1/2 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize'>
           <span className="text-[20px]"><MdAddCircleOutline/></span>
            <span>Submit</span>
           </button>
        </form>
        <div className="experiences-list mt-5 flex flex-wrap items-center gap-3">
          {experiences?.map((exp,index)=>(
            <div key={index} className="experiences-item dark:text-slate-50 max-w-[250px] w-full capitalize border-[1px] border-slate-300  dark:border-slate-500 rounded-md p-3">
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
            </div>
           </div>
             ))}
        </div>
        </section>
  )
}

export default Experiences