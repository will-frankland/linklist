"use client"

export default function HeroForm() {
  return (
    <form className="inline-flex items-center shadow-lg shadow-gray-700/20">
      <span className="bg-white py-4 pl-4">linklist.to/</span>
      <input type="text" className="py-4" placeholder="username" />
      <button type="submit" className="bg-blue-500 text-white py-4 px-6">
        Join for free
      </button>
    </form>
  );
}
