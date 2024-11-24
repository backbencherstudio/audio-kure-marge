// src/components/CustomAnsButton.jsx

import { FaArrowRightLong } from "react-icons/fa6";

function CustomAnsButton({ text, onClick }) {
  return (
    <button
      className="border flex border-[#BFE5BE] rounded-2xl p-3 hover:bg-[#80808034] justify-between items-center"
      onClick={onClick}
    >
      <p className="text-sm font-semibold">{text}</p>
      <FaArrowRightLong />
    </button>
  );
}

export default CustomAnsButton;
