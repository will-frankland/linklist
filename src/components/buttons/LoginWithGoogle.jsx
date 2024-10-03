"use client"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

const LoginWithGoogle = () => {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white shadow text-center w-full py-4 rounded-md flex gap-3 justify-center items-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Sign in with Google</span>
    </button>
  );
}
 export default LoginWithGoogle;