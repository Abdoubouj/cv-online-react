import { useState } from "react";

export const useLocalStorage = (key,initialValue)=>{
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value,setValue] = useState(initial);

    const setItem = (newValue)=>{
        setValue(newValue)
        localStorage.setItem(key,JSON.stringify(newValue));
    }
    return [value,setItem];
}