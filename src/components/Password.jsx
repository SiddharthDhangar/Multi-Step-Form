import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FormProvider";
import { toast } from "react-toastify";

const Password = () => {
  const navigate = useNavigate();
  const { userInput, handleInput, setLocalStorage } = useAuth();
  const handleNext = () => {
    if (!userInput.password.trim()) {
      toast.error("Please enter your password");
      return;
    } else {
      toast.success("Data submitted successfully");
      setLocalStorage();
      navigate("/AuthDetails");
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/dob");
    }
  };
  return (
    <div className="relative h-screen w-full">
      {/* Back Button - Top Left */}
      <div className="absolute top-6 left-7">
        <h3
          onClick={handleBack}
          className="cursor-pointer text-3xl font-semibold active:text-gray-200"
        >
          {"< Back"}
        </h3>
      </div>

      {/* Centered Form */}
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <h3 className="text-xl font-semibold">Password</h3>

          <input
            type="password"
            name="password"
            value={userInput.password}
            onChange={handleInput}
            className="border border-gray-400 pl-2 p-1 text-md font-semibold outline-none rounded-sm"
            placeholder="Enter your password here.."
          />

          <button
            onClick={handleNext}
            className="border border-gray-400 p-1 bg-gray-400 w-[40%] active:bg-gray-300 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
