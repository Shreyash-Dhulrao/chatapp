import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../features/home/toggleInfo';
import { FaInfo } from 'react-icons/fa6';
import NullProfile from '../../assets/uploads/profile/NullProfile.jpg'
import { useEffect } from 'react';

const chat = ({ userData }) => {
    const dispatch = useDispatch();
    let infoButton = useSelector(state => state.toggleinfo.value);

    const handleInfo = async (e) => {
        e.preventDefault();
        dispatch(toggleState(!infoButton));
    }

    const parseCustomDateString = (dateStr) => {
        const [datePart, timePart, meridiem] = dateStr.split(/[\s]+/);
        const [day, month, year] = datePart.split('-').map(Number);
        let [hours, minutes] = timePart.split(':').map(Number);

        if (meridiem === 'PM' && hours < 12) hours += 12;
        if (meridiem === 'AM' && hours === 12) hours = 0;

        return new Date(year, month - 1, day, hours, minutes);
    };

    const getActiveStatus = (lastActive) => {
        if(lastActive != null){
        const lastDate = parseCustomDateString(lastActive);
        const now = new Date();
        const diff = Math.floor((now - lastDate) / 1000); // in seconds

        if (diff < 60) return 'Active Now';
        if (diff < 3600) return `Active ${Math.floor(diff / 60)} min ago`;
        if (diff < 86400) return `Active ${Math.floor(diff / 3600)} hr ago`;
        return `Active ${Math.floor(diff / 86400)} day ago`;
        } else {
            return false
        }
    };


    return (
        <div className='w-[100%] z-30'>
            <div className="header flex bg-zinc-50 py-2 px-4 justify-between w-[100%]">
                <div className="left-header flex items-center gap-3 w-[80%]">
                    <div className="profile flex items-center">
                        <button className='bg-violet-500 w-10 h-10 items-center justify-center flex rounded-full text-white cursor-pointer'>
                            {userData.profile !== null ? (
                                <img src={userData.profile} className='rounded-[50%]' />
                            ) : (
                                <img src={NullProfile} className='rounded-[50%]' />
                            )}
                        </button>
                    </div>
                    <div className="info flex flex-col min-w-12 gap-0">
                        <p className='lg:w-[500px] truncate overflow-hidden'>{userData.name != null ? userData.name : "Start The conversation with someone"}</p>
                        <span className={`text-xs ${getActiveStatus(userData.lastActive) === "Active Now" ? "text-green-500" : "text-zinc-400"}`}>{getActiveStatus(userData.lastActive)}</span>
                    </div>
                </div>
                <div className="right-header flex items-center">
                    <button onClick={handleInfo} className='bg-violet-500 w-6 h-6 text-medium p-1 rounded-full text-white cursor-pointer'>
                        <FaInfo />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default chat
