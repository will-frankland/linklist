"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const HeroForm = () => {
  useSession();
  useEffect(() => {
    if (
      'localStorage' in window
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername')
      redirect('/account?desiredUsername=' + username)
    }
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const username = input.value;
    if (username.length > 0) {
      window.localStorage.setItem('desiredUsername', username)
      await signIn("google", {
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-lg shadow-gray-700/20"
    >
      <span className="bg-white py-4 pl-4">linklist.to/</span>
      <input type="text" className="py-4" placeholder="username" />
      <button type="submit" className="bg-blue-500 text-white py-4 px-6">
        Join for free
      </button>
    </form>
  );
}

export default HeroForm;
