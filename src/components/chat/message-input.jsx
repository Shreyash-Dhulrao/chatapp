import { useState } from 'react'
import { FaMicrophone } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import FileInput from '../messages/fileInput';
import ImageInput from '../messages/imageInput';

const messageInput = () => {
   const [text, setText] = useState("");
    return (
        <div>
            <div className="message w-[100%] p-2">
                <div className='bg-white p-2 rounded-full p-1 items-center flex gap-3'>
                    <button className='bg-violet-500 text-white p-1 flex items-center justify-center rounded-full w-7 h-7 cursor-pointer'>
                        <FaMicrophone />
                    </button>
                    <form className='flex items-center w-[90%]'>
                        <textarea value={text} onChange={(e)=>setText(e.currentTarget.value)} className="h-6 max-h-24 w-full resize-none overflow-y-auto outline-none border-none" placeholder="Type something..."></textarea>
                        <button type="submit" className='bg-violet-500 text-white p-1 flex items-center justify-center rounded-full w-7 h-7 cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </form>
                    <FileInput />
                    <ImageInput />
                </div>
            </div>
        </div>
    )
}

export default messageInput
