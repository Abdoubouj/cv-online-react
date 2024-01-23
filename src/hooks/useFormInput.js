import { useState } from "react";

export const useForm = (initValue) => {
  const [values, setValues] = useState(initValue);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);  
  const validate = (e, name, value) => {
    if (value === "") {
      setErrors({...errors, [name]: `${name} is required` });
      setIsValid(false);
    } else {
      delete errors[name];
      if(Object.keys(errors).length === 0 ){
        setIsValid(true);
      }
    }
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    validate(e, name, value);
    setValues({ ...values,id:values?.id, [name]: value });
  };

  const handleSetValues = (newValues)=>{
    setValues(newValues);
  }

  const EmptyValues = ()=>{
    setValues(initValue);
  }
  return { values, handleChange, errors, isValid ,EmptyValues , handleSetValues};
};
