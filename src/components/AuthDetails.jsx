import React from "react";
import { useAuth } from "../contexts/FormProvider";
import { CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const { userInput } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-[50%] max-w-md p-5 gap-3 border border-gray-300 shadow-md rounded-md">
        {/* ✅ Success Section */}
        <div className="flex flex-col items-center gap-2">
          <CheckCircle
            className="text-green-500 w-12 h-12 animate-[pop_0.4s_ease-out]
          drop-shadow-[0_0_10px_rgba(34,197,94,0.7)"
          />
          <p className="text-green-600 font-semibold animate-[fadeIn_0.6s_ease-in]">
            Your data submitted successfully
          </p>
        </div>

        {/* Divider */}
        <hr />

        <div className="flex gap-1">
          <p>Name:</p>
          <p>{userInput.name}</p>
        </div>

        <div className="flex gap-1">
          <p>Email:</p>
          <p>{userInput.email}</p>
        </div>

        <div className="flex gap-1">
          <p>Dob:</p>
          <p>{userInput.dob}</p>
        </div>

        <div className="flex gap-1">
          <p>Password:</p>
          <p className="tracking-widest">
            {"•".repeat(userInput.password.length)}
          </p>
        </div>
      </div>

      <div className="w-full flex mt-4 gap-3 justify-center">
        <button
          onClick={handleBack}
          className="border border-gray-400 px-6 py-2 w-32 bg-gray-400 active:bg-gray-300 cursor-pointer rounded-md"
        >
          exit
        </button>
      </div>
    </div>
  );
};

export default AuthDetails;
