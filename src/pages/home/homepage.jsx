import React from 'react'
import Leftbar from '../../components/home/leftbar'
import Rightbar from '../../components/home/rightbar'
import Chat from '../../components/home/chat'
import { useSelector } from 'react-redux'


const homepage = () => {
    let toggleInfo = useSelector(state => state.toggleinfo.value);
    return (
        <div className='bg-white w-full flex md:p-3 p-0 h-screen'>
            <div className='w-[25%] w-fixed h-full bg-zinc-200/50'>
                <Leftbar />
            </div>
            <div className='w-full flex-1 h-full bg-zinc-300/50'>
                <Chat />
            </div>
            <div className={`w-[25%] h-full bg-green-300 ${toggleInfo ? 'block' : 'hidden'}`} >
                <Rightbar />
            </div>
        </div>
    )
}

export default homepage
