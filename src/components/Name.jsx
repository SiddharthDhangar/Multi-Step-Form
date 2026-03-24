import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FormProvider";
import { toast } from "react-toastify";
const Name = () => {
  const navigate = useNavigate();
  const { userInput, handleInput } = useAuth();

  const handleNext = () => {
    if (!userInput.name.trim()) {
      toast.error("Name is required");
      return;
    } else {
      toast.success("Successfully entered");
      navigate("/email");
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <h3 className="text-xl font-semibold">Name</h3>

        <input
          onChange={handleInput}
          value={userInput.name}
          name="name"
          type="text"
          className="border border-gray-400 pl-2 p-1 text-md font-semibold outline-none rounded-sm"
          placeholder="Enter your name here.."
          required
        />

        <button
          className="border border-gray-400 p-1 bg-gray-400 w-[40%] active:bg-gray-300 cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Name;
