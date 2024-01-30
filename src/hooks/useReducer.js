import { useState } from "react";

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
  }
};
export const useCvReducer = () => {
  const [state, dispatch] = useState(CvReducer, {
    skills: [],
    languages: [],
    educations: [],
    experiences: [],
    personnalInfo: {},
  });
  return {state};
};
