"use client"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <button
      className="flex items-center gap-2 border p-2 px-4 shadow"
      onClick={() => signOut()}>
      <span>Logout</span>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </button>
  )
}

export default LogoutButton;