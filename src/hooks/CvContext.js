import { createContext } from "react";
import { useCvReducer } from "./useReducer";

const CvContext = createContext();
const {state} = useCvReducer();

export const CvContextProvider = ({children})=>{
    return(
        <CvContext.Provider value={{state}}>
            {children}
        </CvContext.Provider>
    )
}