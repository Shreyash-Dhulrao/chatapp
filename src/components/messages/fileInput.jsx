import React, { useRef } from 'react';
import { BiPaperclip } from "react-icons/bi";

const FileUploadButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        className="bg-violet-500 text-white p-1 rotate-270 flex items-center justify-center rounded-full w-7 h-7 cursor-pointer"
        onClick={handleButtonClick}
      >
        <BiPaperclip  />
      </button>
    </div>
  );
};

export default FileUploadButton;
