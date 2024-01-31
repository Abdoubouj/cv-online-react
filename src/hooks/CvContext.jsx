import { createContext } from "react";
import { CvReducer} from "./CvReducer";
import { useLocalStorage } from "./useLocalStorage";

export const CvContext = createContext();

export const CvContextProvider = ({children})=>{
    const [state,dispatch] = useLocalStorage(CvReducer,{personnalInfo:{},skills:[],educations:[],experiences:[],languages:[]},"data")
    return(
        <CvContext.Provider value={{state , dispatch}}>
            {children}
        </CvContext.Provider>
    )
}