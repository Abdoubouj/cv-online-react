// import { useState } from "react";

// export const useLocalStorage = (key,initialValue)=>{
//     const storedValue = localStorage.getItem(key);
//     const initial = storedValue ? JSON.parse(storedValue) : initialValue;

//     const [value,setValue] = useState(initial);

//     const setItem = (newValue)=>{
//         setValue(newValue)
//         localStorage.setItem(key,JSON.stringify(newValue));
//     }
//     return [value,setItem];
// }
import { useReducer, useEffect } from 'react';

export const useLocalStorage = (reducer, initialState, key) => {
  const storedState = JSON.parse(localStorage.getItem(key)) || initialState;
  const [state, dispatch] = useReducer(reducer, storedState);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};