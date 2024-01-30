import React from 'react'

const References = () => {
  return (
    <section className="references-section">
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>References</h6>
      <form className="border-2 shadow-sm border-slate-200 rounded-2xl p-5 flex gap-5 flex-wrap justify-start items-center">
        <div className="mb-3 flex flex-col flex-1">
          <label
            htmlFor="fullName"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Full name
          </label>
          <input
            type="text"
            placeholder="enter full name ..."
            value={values.fullName}
            name="fullName"
            onChange={handleChange}
            className={`${errors.fullName ? 'focus:border-red-600 border-red-600':'focus:border-mainColor border-slate-200'} border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 shadow-sm dark:bg-slate-800 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px]  px-3 py-2`}
          />
          {errors.fullName && 
          <span className="text-red-600 mt-1">{errors.fullName}</span>
          }
        </div>
        <div className="mb-3 flex flex-col flex-1">
          <label
            htmlFor="email"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Full name
          </label>
          <input
            type="text"
            placeholder="enter full name ..."
            value={values.email}
            name="email"
            onChange={handleChange}
            className={`${errors.email ? 'focus:border-red-600 border-red-600':'focus:border-mainColor border-slate-200'} border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 shadow-sm dark:bg-slate-800 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px]  px-3 py-2`}
          />
          {errors.email && 
          <span className="text-red-600 mt-1">{errors.email}</span>
          }
        </div>
        <div className="mb-3 flex flex-col flex-1">
          <label
            htmlFor="telephone"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Full name
          </label>
          <input
            type="text"
            placeholder="enter full name ..."
            value={values.telephone}
            name="telephone"
            onChange={handleChange}
            className={`${errors.telephone ? 'focus:border-red-600 border-red-600':'focus:border-mainColor border-slate-200'} border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 shadow-sm dark:bg-slate-800 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px]  px-3 py-2`}
          />
          {errors.telephone && 
          <span className="text-red-600 mt-1">{errors.telephone}</span>
          }
        </div>
      </form>
      </section>
  )
}

export default References