import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdAddCircleOutline, MdArrowRightAlt, MdDeleteOutline } from 'react-icons/md';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useForm } from '../hooks/useFormInput';

const Educations = ({handleSetEducations , educations}) => {
  const [initialState , setInitialState] = useState({school:"",degree:"",field:"",startDate:"",present:false,endDate:""});
   const {values,handleChange,errors ,isValid ,EmptyValues} = useForm(initialState);
  useDocumentTitle("educations");
  const handleSubmit = (e)=>{ 
    e.preventDefault();
    handleSetEducations({...values});
    EmptyValues();
  }
  return (
       <section className="skills-section">
                <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>Educations</h6>
      <form onSubmit={isValid ? handleSubmit : (e)=>e.preventDefault()} className="flex gap-5 justify-center flex-wrap border-2 shadow-sm border-slate-200 rounded-2xl p-5 items-center">
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="school"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            school
          </label>
          <input
            type="text"
            placeholder="enter school name"
            name='school'
            value={values.school}
            onChange={handleChange}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
           {errors.school && 
          <span className="text-red-600 mt-1">{errors.school}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="degree"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            degree
          </label>
          <input
            type="text"
            placeholder="enter your degree"
            value={values.degree}
            name='degree'
            onChange={handleChange}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
           {errors.degree && 
          <span className="text-red-600 mt-1">{errors.degree}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
          <label
            htmlFor="field"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            field
          </label>
          <input
            type="text"
            placeholder="enter field of study "
            value={values.field}
            name='field'
            onChange={handleChange}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
           {errors.field && 
          <span className="text-red-600 mt-1">{errors.field}</span>
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
            name='startDate'
            value={values.startDate}
            onChange={handleChange}
            className="border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 dark:bg-slate-800 border-slate-200 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2"
          />
           {errors.startDate && 
          <span className="text-red-600 mt-1">{errors.startDate}</span>
          }
        </div>
        
        <div className="mb-3 flex items-center gap-2 w-[40%]">
          <input
            type="checkbox"
            name='present'
            value={values.present}
            checked={values?.present ? true :false}
            onChange={handleChange}
            className='peer/present'
          />
        <label
          htmlFor="present"
          className="peer-checked/present:text-mainColor font-[400] text-slate-900 capitalize  dark:text-slate-50"
        >
          present
        </label>
        {errors.present && 
          <span className="text-red-600 mt-1">{errors.present}</span>
          }
      </div>
      {!values?.present &&
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
          <button type='submit' className='flex items-center justify-center gap-3 shadow-lg bg-mainColor w-1/2 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize'>
           <span className="text-[20px]"><MdAddCircleOutline/></span>
            <span>Submit</span>
           </button>
        </form>
        
        <div className="educations-list mt-5 flex flex-wrap items-center gap-3">
          {educations.map((edu , index)=>(
            <div key={index} className="education-item dark:text-slate-50 max-w-[250px] w-full capitalize border-[1px] border-slate-300  dark:border-slate-500 rounded-md p-3">
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
            </div>
           </div>
             ))}
        </div>
        </section>
  )
}

export default Educations