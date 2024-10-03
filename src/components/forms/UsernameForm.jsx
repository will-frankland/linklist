"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import { grabUsername } from "@/actions/grabUsername";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

const UsernameForm = ({ desiredUsername }) => {
  const [taken, setTaken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    console.log("Form data submitted: ", formData.get("username"))
    const result = await grabUsername(formData);
    console.log("grabUsername result: ", result);
    setIsLoading(false);
    setTaken(result === false);
    if (result) {
      router.push("/account?created=/" + formData.get("username"));
    }
  };

  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Grab your username
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2 mx-auto border w-full mb-2 text-center"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username"
        />
        {taken && (
          <div className="bg-red-300 border border-red-500 p-2 mb-2">
            Username Taken
          </div>
        )}
        <SubmitButton>
          <span>Claim your username</span>
          <RightArrowIcon />
        </SubmitButton>
       
      </div>
    </form>
  );
};

export default UsernameForm;
