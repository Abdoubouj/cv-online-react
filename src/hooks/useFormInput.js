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
      setIsValid(true);
    }
  };
  const handleChange = (e) => {
    //    e.persist();
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
  // const handleUpdate = (valuesToUpdate)=>{
  //   setIsUpdate(true);
  //   setValues(valuesToUpdate);
  // }
   
  // const handleCancel = ()=>{
  //   setIsUpdate(false);
  //   setValues(initValue);
  // }


  return { values, handleChange, errors, isValid ,EmptyValues , handleSetValues};
};
