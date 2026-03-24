import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FormProvider";
import { toast } from "react-toastify";

const Email = () => {
  const navigate = useNavigate();
  const { userInput, handleInput } = useAuth();

  const handleNext = (e) => {
    if (!userInput.email.trim()) {
      toast.error("Please enter your email");
      return;
    } else {
      toast.success("successfully entered");
      navigate("/dob");
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="relative h-screen w-full">
      {/* Back Button - Top Left */}
      <div className="absolute top-6 left-7">
        <h3
          onClick={handleBack}
          className="cursor-pointer text-3xl font-semibold active:text-gray-300"
        >
          {"< Back"}
        </h3>
      </div>

      {/* Centered Form */}
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <h3 className="text-xl font-semibold">Email</h3>

          <input
            type="text"
            onChange={handleInput}
            value={userInput.email}
            name="email"
            className="border border-gray-400 pl-2 p-1 text-md font-semibold outline-none rounded-sm"
            placeholder="Enter your email here.."
          />

          <button
            onClick={handleNext}
            className="border border-gray-400 p-1 bg-gray-400 w-[40%] active:bg-gray-300 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
