import React, { useMemo } from 'react'
import Icon from '../../assets/Images/Icon.jpg'
import { Link } from 'react-router-dom'
import { FaGear, FaUserPlus, FaUsers } from "react-icons/fa6";
import { useState } from 'react';
import { IoPeople } from "react-icons/io5";
import Profile1 from '../../assets/uploads/profile/Profile1.jpg'
import Profile2 from '../../assets/uploads/profile/Profile2.jpg'
import Profile3 from '../../assets/uploads/profile/Profile3.jpg'
import Profile4 from '../../assets/uploads/profile/Profile4.jpg'
import NullProfile from '../../assets/uploads/profile/NullProfile.jpg'
import { useDispatch } from 'react-redux';
import { userCard } from '../../features/home/userChats';



const leftbar = () => {
  const [search, setSearch] = useState('');
  const [friendButton, setFriendButton] = useState("Friends");
  const dispatch = useDispatch()
  const allUsers = [
    { id: 1, profile: null, name: 'Alice', isFriend:true },
    { id: 2, profile: null, name: 'Bob', isFriend:false },
    { id: 3, profile: null, name: 'Charlie', isFriend:true },
    { id: 4, profile: null, name: 'David', isFriend:false },
    { id: 5, profile: Profile1, name: 'Eva', isFriend:true },
    { id: 6, profile: null, name: 'Frank', isFriend:false },
    { id: 7, profile: null, name: 'Grace', isFriend:false },
    { id: 8, profile: Profile2, name: 'Henry', isFriend:false },
    { id: 9, profile: null, name: 'Isabella', isFriend:false },
    { id: 10, profile: null, name: 'Jack', isFriend:true },
    { id: 11, profile: null, name: 'Karen', isFriend:false },
    { id: 12, profile: null, name: 'Leo', isFriend:true },
    { id: 13, profile: null, name: 'Mona', isFriend:false },
    { id: 14, profile: Profile3, name: 'Nate', isFriend:true },
    { id: 15, profile: null, name: 'Olivia', isFriend:false },
    { id: 16, profile: null, name: 'Peter', isFriend:false },
    { id: 17, profile: null, name: 'Quincy', isFriend:false },
    { id: 18, profile: Profile4, name: 'Rachel', isFriend:true },
    { id: 19, profile: null, name: 'Steve', isFriend:false },
    { id: 20, profile: null, name: 'Tina', isFriend:false },
    { id: 21, profile: null, name: 'Uma', isFriend:false },
    { id: 22, profile: null, name: 'Victor', isFriend:true },
    { id: 23, profile: null, name: 'Wendy', isFriend:false },
    { id: 24, profile: null, name: 'Xavier', isFriend:true },
    { id: 25, profile: null, name: 'Yara', isFriend:false },
    { id: 26, profile: null, name: 'Zack', isFriend:true },
    { id: 27, profile: null, name: 'Liam', isFriend:false },
    { id: 28, profile: null, name: 'Sophie', isFriend:false },
  ];

  let addedFriends = [
    { id: 1, profile: null, name: 'Alice', lastActive: new Date(Date.now() - 1000 * 60 * 12),  isFriend:true }, // 12 min ago
    { id: 3, profile: null, name: 'Charlie', lastActive: new Date(),  isFriend:true }, // active now
    { id: 5, profile: Profile4, name: 'Eva', lastActive: new Date(Date.now() - 1000 * 60 * 60),  isFriend:true }, // 1 hr ago
    { id: 10, profile: null, name: 'Jack', lastActive: new Date(),  isFriend:true }, // active now
    { id: 12, profile: Profile2, name: 'Leo', lastActive: new Date(Date.now() - 1000 * 60 * 5),  isFriend:true }, // 5 min ago
    { id: 14, profile: null, name: 'Nate', lastActive: new Date(Date.now() - 1000 * 60 * 30),  isFriend:true }, // 30 min ago
    { id: 18, profile: Profile1, name: 'Rachel', lastActive: new Date(),  isFriend:true }, // active now
    { id: 22, profile: null, name: 'Victor', lastActive: new Date(Date.now() - 1000 * 60 * 1440),  isFriend:true }, // 1 day ago
    { id: 24, profile: null, name: 'Xavier', lastActive: new Date(Date.now() - 1000 * 60 * 2),  isFriend:true }, // 2 min ago
    { id: 26, profile: null, name: 'Zack', lastActive: new Date(Date.now() - 1000 * 60 * 720),  isFriend:true }, // 12 hrs ago
  ];



  const filteredUsers = useMemo(() => {
    const targetList = friendButton === 'Friends' ? addedFriends : allUsers;

    const addedFriendIds = new Set(addedFriends.map(friend => friend.id));

    return targetList.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    )
      .map(user => ({
        ...user,
        isFriend: friendButton == 'Add-Friend' && addedFriendIds.has(user.id),
      }));
  }, [search, friendButton]);

  const handleOpenChat = (user) => {
    const updatedUser = {
      ...user,
      lastActive: formatDateTime(user.lastActive),
    };
    dispatch(userCard(updatedUser));
  };

  function formatDateTime(dateObj) {
    const date = new Date(dateObj);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert to 12-hour format

    const formattedTime = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  const getActiveStatus = (lastActive) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(lastActive)) / 1000); // seconds

    if (diff < 60) return 'Active Now';
    if (diff < 3600) return `Active ${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `Active ${Math.floor(diff / 3600)} hr ago`;
    return `Active ${Math.floor(diff / 86400)} day ago`;
  };

  return (
    <div className='w-full h-[100%] bg-white'>
      <div className="header py-2 px-4 flex items-center justify-between">
        <div>
          <Link to="/developer-info" className='flex items-center text-lg gap-3'><img src={Icon} alt="" className='w-11 h-11 rounded-md' />App Name Here</Link>
        </div>
        <Link to="/setting" className='p-2 bg-violet-500 text-white rounded-full'><FaGear /></Link>
      </div>
      <div className="searchbar w-full max-w-md mx-auto p-1 bg-white">
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search User..."
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            className="bg-white w-full px-3 py-2 outline-none border border-zinc-200 rounded"
          />
        </form>

        {/* Toggle Buttons */}
        <div className="w-full flex items-center justify-around mt-2">
          <button
            onClick={() => setFriendButton('Add-Friend')}
            className={`px-4 py-2 rounded-full text-white flex items-center gap-2
            ${friendButton === 'Add-Friend' ? 'bg-violet-500' : 'bg-zinc-400'} 
            hover:bg-violet-600 transition`}
          >
            <IoPeople /> Add Friend
          </button>

          <button
            onClick={() => setFriendButton('Friends')}
            className={`px-4 py-2 rounded-full text-white flex items-center gap-2
            ${friendButton === 'Friends' ? 'bg-violet-500' : 'bg-zinc-400'} 
            hover:bg-violet-600 transition`}
          >
            <FaUsers /> Friends
          </button>
        </div>
      </div>
      <div className="members bg-zinc-200 h-[70%] overflow-y-scroll">
        <ul className="space-y-1 mt-1">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <li
                key={user.id}
                className="bg-white px-3 w-full flex items-center gap-2"
              >
                <div className='w-10 h-10 flex items-center'>
                  <img src={user.profile ? user.profile : NullProfile} className='rounded-[50%]' />
                </div>
                <div className='h-12 w-[65%] flex items-center'>
                  {friendButton === 'Friends' ? (
                    <button
                      onClick={() => handleOpenChat(user)}
                      className="w-full text-start cursor-pointer flex flex-col "
                    >
                      {user.name}
                      <span className={`text-xs ${getActiveStatus(user.lastActive) === "Active Now" ? "text-green-500" : "text-zinc-400"}`}>{getActiveStatus(user.lastActive)}</span>
                    </button>
                  ) : (
                    <p className="text-zinc-800 text-center flex self-center">{user.name}</p>
                  )}
                </div>
                {friendButton === 'Add-Friend' && (user.isFriend ? (
                  <div>
                    <p className='text-zinc-400 text-sm'>Friends</p>
                  </div>
                ) : (
                  <button type='button' className='w-10 h-10 flex justify-center items-center cursor-pointer text-zinc-700 text-sm hover:text-white hover:bg-violet-500 transition duration-300 ease-in-out bg-zinc-200 rounded-full'> <FaUserPlus /></button>
                ))}
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No users found.</li>
          )}
        </ul>
      </div>
      <div className="footer flex items-center justify-center bg-zinc-800 text-white h-[7%]" >
        <p className='text-center'>Developed By <a href="https://www.shreyashdhulrao.in" target='_blank' className='text-violet-500' >Shreyash Dhulrao</a></p>
      </div>
    </div>
  )
}

export default leftbar
