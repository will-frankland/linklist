import { useFormStatus } from 'react-dom'
const SubmitButton = ({ children, isLoading }) => {
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="text-white disabled:text-gray-200 bg-blue-500 disabled:bg-blue-300 py-2 px-4 mx-auto w-full flex gap-2 items-center justify-center"
    >
      {children}
    </button>
  );
};

export default SubmitButton;