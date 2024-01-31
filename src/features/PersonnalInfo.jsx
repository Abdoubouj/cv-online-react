import React, {useContext, useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { MdAddCircleOutline } from 'react-icons/md';
import { useForm } from '../hooks/useFormInput';
import { CvContext } from '../hooks/CvContext';
import { FiEdit } from 'react-icons/fi';

const PersonnalInfo = ({handleSetPersonnalInfo}) => {
    const [image, setImage]=useState("");
   const [initialState , setInitialState] = useState({image:"",firstName:"",lastName:"",email:"",telephone:"",adresse:"",speciality:"",profile:"",image:""});
   const {values,handleChange,errors ,isValid ,EmptyValues ,handleSetValues} = useForm(initialState);
    const {state,dispatch} = useContext(CvContext);
   useDocumentTitle("personnal info");
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage(imageUrl);
        }
      };
   const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch({type:"ADD_PERSONAL_INFO",payload:{...values,image:image}});
      // handleSetPersonnalInfo({...values,image});
      EmptyValues();
   }
   console.log(state.personnalInfo);
  //  console.log(errors.firstName);
  return (
    <section className='personnal-info-section'>
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>Personnal Informations</h6>
       <form onSubmit={isValid ? handleSubmit : (e)=>e.preventDefault()} className="flex gap-5 justify-start flex-wrap border-2 shadow-sm border-slate-200 rounded-2xl p-5 items-start">
        <div className="mb-3 flex flex-col w-[30%]">
           <label htmlFor="firstName" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>First Name</label>
           <input type="text" value={values.firstName} placeholder='enter your first name' name='firstName' onChange={handleChange} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.firstName ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`} />
           {errors.firstName && 
          <span className="text-red-600 mt-1">{errors.firstName}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[30%]">
           <label htmlFor="lastName"  className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>Last Name</label>
           <input type="text" value={values.lastName} placeholder='enter your last name' name='lastName' onChange={handleChange} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.lastName ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`} />
           {errors.lastName && 
          <span className="text-red-600 mt-1">{errors.lastName}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[30%]">
            <label htmlFor="image" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2'>image</label>
            <input type="file" accept='image/*' onChange={handleImageUpload} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.image ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`}/>
            {errors.image && 
          <span className="text-red-600 mt-1">{errors.image}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[30%]">
           <label htmlFor="email" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>Email</label>
           <input type="text" value={values.email} placeholder='enter your email' name='email' onChange={handleChange} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.email ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`} />
           {errors.email && 
          <span className="text-red-600 mt-1">{errors.email}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[30%]">
           <label htmlFor="telephone" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>telephone</label>
           <input type="tele" value={values.telephone} placeholder='enter your telephone' name="telephone" onChange={handleChange} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.telephone ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`} />
           {errors.telephone && 
          <span className="text-red-600 mt-1">{errors.telephone}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[30%]">
           <label htmlFor="adresse" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>adresse</label>
           <input type="text" value={values.adresse} placeholder='enter your adresse' name="adresse" onChange={handleChange} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.adresse ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`} />
           {errors.adresse && 
          <span className="text-red-600 mt-1">{errors.adresse}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[30%]">
           <label htmlFor="speciality" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>speciality</label>
           <input type="text" value={values.speciality} placeholder='enter your speciality' name='speciality' onChange={handleChange} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.speciality ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`} />
           {errors.speciality && 
          <span className="text-red-600 mt-1">{errors.speciality}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[30%]">
            <label htmlFor="profile" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 ' >Profile</label>
        <textarea placeholder='enter your profile summary' value={values.profile} name='profile' onChange={handleChange} className={`rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 placeholder:text-slate-500 placeholder:text-[14px] ${errors.profile ? 'outline-none ring-2 border-red-600 ring-red-400':'border-[1px] border-slate-200 focus:border-mainColor focus:outline-none focus:ring-2 ring-blue-400'} px-3 py-2`} cols="20" rows="5"></textarea>
        {errors.profile && 
          <span className="text-red-600 mt-1">{errors.profile}</span>
          }
        </div>
        <button type='submit' className='flex items-center justify-center gap-3 shadow-lg bg-mainColor w-1/2 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize'>
        <span className="text-[20px]"><MdAddCircleOutline/></span>
          <span>Submit</span>
        </button>
        <button onClick={()=>{handleSetValues(state.personnalInfo)}} className='bg-green-500 text-slate-50 rounded-md p-4'><FiEdit /></button>
       </form>
    </section>
  )
}

export default PersonnalInfo