"use client"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => {}}
      className="bg-white shadow text-center w-full py-4 rounded-md flex gap-3 justify-center items-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Sign in with Google</span>
    </button>
  );
}
