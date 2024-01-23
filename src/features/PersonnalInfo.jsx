import React, {useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { MdAddCircleOutline } from 'react-icons/md';
import { useForm } from '../hooks/useFormInput';

const PersonnalInfo = ({handleSetPersonnalInfo}) => {
    const [image, setImage]=useState("");
   const [initialState , setInitialState] = useState({image:"",firstName:"",lastName:"",email:"",telephone:"",adresse:"",speciality:"",profile:"",image:""});
   const {values,handleChange,errors ,isValid ,EmptyValues} = useForm(initialState);
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
      handleSetPersonnalInfo({...values,image});
      EmptyValues();
   }
   console.log(isValid);
  return (
    <section className='personnal-info-section'>
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>Personnal Informations</h6>
       <form onSubmit={isValid ? handleSubmit : (e)=>e.preventDefault()} className="flex gap-5 justify-center flex-wrap border-2 shadow-sm border-slate-200 rounded-2xl p-5 items-start">
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="firstName" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>First Name</label>
           <input type="text" value={values.firstName} placeholder='enter your first name' name='firstName' onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
           {errors.firstName && 
          <span className="text-red-600 mt-1">{errors.firstName}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="lastName"  className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>Last Name</label>
           <input type="text" value={values.lastName} placeholder='enter your last name' name='lastName' onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
           {errors.lastName && 
          <span className="text-red-600 mt-1">{errors.lastName}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[82%]">
            <label htmlFor="image" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2'>image</label>
            <input type="file" accept='image/*' onChange={handleImageUpload} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2'/>
            {errors.image && 
          <span className="text-red-600 mt-1">{errors.image}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="email" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>Email</label>
           <input type="text" value={values.email} placeholder='enter your email' name='email' onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
           {errors.email && 
          <span className="text-red-600 mt-1">{errors.email}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="telephone" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>telephone</label>
           <input type="tele" value={values.telephone} placeholder='enter your telephone' name="telephone" onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
           {errors.telephone && 
          <span className="text-red-600 mt-1">{errors.telephone}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="adresse" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>adresse</label>
           <input type="text" value={values.adresse} placeholder='enter your adresse' name="adresse" onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
           {errors.adresse && 
          <span className="text-red-600 mt-1">{errors.adresse}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[40%]">
           <label htmlFor="speciality" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 '>speciality</label>
           <input type="text" value={values.speciality} placeholder='enter your speciality' name='speciality' onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' />
           {errors.speciality && 
          <span className="text-red-600 mt-1">{errors.speciality}</span>
          }
        </div>
        <div className="mb-3 flex flex-col w-[82%]">
            <label htmlFor="profile" className='font-[400] dark:text-slate-100 text-slate-900 capitalize mb-2 ' >Profile</label>
        <textarea placeholder='enter your profile summary' value={values.profile} name='profile' onChange={handleChange} className='border-[1px] border-slate-200 rounded-md dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px] focus:border-mainColor px-3 py-2' cols="20" rows="5"></textarea>
        {errors.profile && 
          <span className="text-red-600 mt-1">{errors.profile}</span>
          }
        </div>
        <button type='submit' className='flex items-center justify-center gap-3 shadow-lg bg-mainColor w-1/2 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize'>
        <span className="text-[20px]"><MdAddCircleOutline/></span>
          <span>Submit</span>
        </button>
       </form>
    </section>
  )
}

export default PersonnalInfo