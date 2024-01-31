export const CvReducer = (state, action) => {
  if (action.type === "ADD_SKILLS") {
    return { ...state, skills: [...state.skills, action.payload] };
  } else if (action.type === "ADD_LANGUAGES") {
    return { ...state, languages: [...state.languages, action.payload] };
  } else if (action.type === "ADD_PERSONAL_INFO") {
    return { ...state, personnalInfo: action.payload };
  } else if (action.type === "ADD_EDUCATIONS") {
    return { ...state, educations: [...state.educations, action.payload] };
  } else if (action.type === "ADD_EXPERIENCES") {
    return { ...state, experiences: [...state.experiences, action.payload] };
  }else if (action.type === "REMOVE_SKILLS"){
    return {...state,skills:state.skills.filter((s)=> s !== action.payload)}
  }else if(action.type === "UPDATE_SKILLS"){
    return {...state,skills:state.skills?.map((skill,index)=>{
      if(index === action.payload.index){
        return {...skill,skillName:action.payload.skillName , skillLevel:action.payload.skillLevel}
      }else{
        return skill
      }
    })}
  }else{
    return state
  }
};