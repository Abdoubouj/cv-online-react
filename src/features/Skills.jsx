import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline, MdAddCircleOutline, MdCancel } from "react-icons/md";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useForm } from "../hooks/useFormInput";
const Skills = ({handleSetSkills ,removeSkill, skills}) => {
  const [initialState , setInitialState] = useState({skillName:"",skillLevel:0});
  const {values,handleChange,errors ,isValid ,EmptyValues ,handleSetValues} = useForm(initialState);
  const [skillIndex,setSkillIndex] = useState(null);
  useDocumentTitle("skills");
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleSetSkills(values ,skillIndex);
    setSkillIndex(null);
    EmptyValues();
    // setSkill({skillName:"",skillLevel:""});
  }
  console.log(errors);
  // const handleChange = (e)=>{
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setSkill({...skill,id:id,[name]:value});
  // }
  // const handleClick = () => {
  //   if(skill && level){
  //     if (!isUpdate) {
  //       const checkSkill = skills.find(s=>s.skill === skill);
  //       if(!checkSkill){
  //         setSkills([...skills, { id, skill, level: parseInt(level) }]);
  //         setSkill("");
  //         setLevel(0);
  //         setId((prev) => prev + 1);
  //         delete error.repeatError;
  //       }else{
  //         setError({...error,repeatError:"skill is already exist"})
  //       }
  //   } else {
  //     setSkills((prev) => {
  //       return prev.map((s) => {
  //         if (s.id === id) {
  //           return { ...s, ...{ id, skill, level: parseInt(level) } };
  //         }
  //         return s;
  //       });
  //     });
  //     setSkill("");
  //     setLevel(0);
  //     setId(skills.length + 1);
  //     setIsUpdate(false);
  //   }
  //   delete error.message;
  // }else{
  //   if(!error['message']){
  //     setError({...error,message:"skill or level does't filled"})
  //   }
  // }
  // };
  // console.log(error);
  // const handleUpdate = (s) => {
  //   setIsUpdate(true);
  //   setId(s.id);
  //   setSkill(s.skill);
  //   setLevel(s.level);
  // };
  // const handleRemove = (skillId) => {
  //   setSkills([...skills.filter((s) => s.id !== skillId)]);
  //   setIsUpdate(false);
  //   setSkill("");
  //   setLevel(0);
  //   setId(skills.length + 1);
  // };
  // console.log(skills);
  // console.log(id)
  console.log(values);
  console.log(skillIndex);
  // console.log(errors);
  // console.log(isValid);
  // console.log(skill);
  // console.log(skill);
  // console.log(skill.id);
  return (
    <section className="skills-section">
        <h6 className='mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-400 text-[35px] text-center font-[800] capitalize'>can you fill all inputs</h6>
      <form onSubmit={isValid ? handleSubmit : (e)=>{e.preventDefault()} } className="border-2 shadow-sm border-slate-200 rounded-2xl p-5 flex gap-5 flex-wrap justify-start items-center">
        <div className="mb-3 flex flex-col flex-1">
          <label
            htmlFor="skill"
            className="font-[400] text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Skill name
          </label>
          <input
            type="text"
            placeholder="enter your skill"
            value={values.skillName}
            name="skillName"
            // onChange={(e) => {
            //   setSkill(e.target.value);
            // }}
            onChange={handleChange}
            className={`${errors.skillName ? 'focus:border-red-600 border-red-600':'focus:border-mainColor border-slate-200'} border-[1px] dark:text-slate-50 dark:placeholder:text-slate-500 shadow-sm dark:bg-slate-800 rounded-md focus:outline-0 placeholder:text-slate-500 placeholder:text-[14px] focus:border-[1px]  px-3 py-2`}
          />
          {errors.skillName && 
          <span className="text-red-600 mt-1">{errors.skillName}</span>
          }
        </div>
        <div className="mb-3 relative flex flex-col flex-1">
          <label
            htmlFor="level"
            className="font-[400]  text-slate-900 capitalize mb-2 dark:text-slate-50"
          >
            Skill Level
          </label>
          <input
            type="range"
            min={0}
            max={100}
            placeholder="enter"
            name="skillLevel"
            value={values.skillLevel}
            // onChange={(e) => {
            //   setLevel(e.target.value);
            // }}
            onChange={handleChange}
            className="bg-slate-50 dark:bg-slate-800"
          />
          {/* {errors.skillLevel && 
          <span className="text-red-600 mt-1">{errors.skillLevel}</span>
          } */}
          <span className="absolute -top-[10px] left-[48%] bg-mainColor px-7 py-2 rounded-lg text-slate-50">{values.skillLevel}%</span>
        </div>
        {/* <ul className="errors w-[80%] bg-red-600 text-red-100 font-[600] text-[15px] rounded-md">
        {error.message &&
          <li className="m-2"> {error.message}</li>
        }
        {error.repeatError &&
          <li className="m-2">{error.repeatError}</li>
        }
        </ul> */}
        {skillIndex !==null ? 
        <div className="flex w-full gap-5 justify-center">
        <button onClick={()=>{ handleSetSkills(values ,skillIndex)}} className="flex items-center justify-center gap-3 shadow-lg bg-green-700 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize">
        <FiEdit/>
        <span>Update</span>
        </button>
        <button onClick={()=>{ setSkillIndex(null) ; handleSetValues(initialState);}} className="flex items-center justify-center gap-3 shadow-lg bg-slate-800 hover:opacity-80 transition-all duration-300 text-slate-50 rounded-lg px-5 py-3 capitalize">
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
      <div className="text-center mt-5">
        {/* <button
          className={`${
            isUpdate ? "bg-green-600" : "bg-mainColor"
          } hover:opacity-80 transition-all duration-300 text-slate-50 rounded-md px-5 py-2 capitalize`}
          onClick={handleClick}
        >
          {isUpdate ? (
            <span className="flex items-center justify-center gap-3">
              <FiEdit className="text-[20px]" /> update skill
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <MdAddCircleOutline className="text-[20px]" /> add skill
            </span>
          )}
        </button> */}
      </div>
      <div className="show-skills-list shadow-sm border-2 border-slate-200 rounded-xl  flex items-center flex-wrap gap-4 mt-6 p-5">
        {skills.map((s,index) => (
          <div
            className="skill-item border-2 border-slate-200 rounded-xl shadow-sm"
            key={index}
          >
            <div className="skill dark:bg-slate-700 font-[600] py-1 text-center capitalize text-slate-500">
              {s.skillName}
            </div>
            <div className="level text-[12px] font-[600] leading-6 w-[40px] rounded-full h-[40px] mb-2 bg-slate-100 mx-auto py-2 text-center dark:text-slate-50">{s.skillLevel}%</div>
            <hr />
            <div className="actions flex gap-2 items-center p-2">
              <button
                className="border-[1px] border-slate-400 rounded-lg text-slate-700 p-2"
                onClick={() => {
                  handleSetValues(s);
                  setSkillIndex(index);
                }}
              >
                <FiEdit />
              </button>
              <button
                className="border-[1px] border-slate-400 rounded-lg text-slate-700 p-2"
                onClick={() => {
                  removeSkill(index);
                }}
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

export default Skills;
