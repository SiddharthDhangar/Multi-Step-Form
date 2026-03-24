import React, { createContext, useState } from "react";
import { useContext } from "react";
const FormContext = createContext();
const FormProvider = ({ children }) => {
  const [userInput, setUserInput] = useState(() => {
    const data = localStorage.getItem("userDetails");
    return data
      ? JSON.parse(data)
      : {
          name: "",
          email: "",
          dob: "",
          password: "",
        };
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setLocalStorage = () => {
    localStorage.setItem("userDetails", JSON.stringify(userInput));
  };

  return (
    <>
      <FormContext.Provider value={{ userInput, handleInput, setLocalStorage }}>
        {children}
      </FormContext.Provider>
    </>
  );
};

export default FormProvider;

export const useAuth = () => {
  return useContext(FormContext);
};
