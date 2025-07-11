import React, { useRef } from 'react';
import { IoImage } from "react-icons/io5";

const ImageUploadButton = () => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('Selected image:', file.name);
            // You can add preview logic here
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
            <button
                className="bg-violet-500 text-white p-1 flex items-center justify-center rounded-full w-7 h-7 cursor-pointer"
                onClick={handleButtonClick}
            >
                <IoImage />

            </button>
        </div>
    );
};

export default ImageUploadButton;
