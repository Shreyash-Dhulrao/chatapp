import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () =>{
  const [visible, setVisible] = useState(false)
  const [Username, setUsername] = useState("")
  const [Password , setPassword] = useState("")

    const handleLogin = (e)=>{
        e.preventDefault()
        if(Username === "" || Password === ""){
          alert("username or password missing...!")
        }
        else{
          const a = {
            Username,
            Password
          }
          console.log(a)
        }
    }

  return (
    <div>
      <div className='flex justify-center'>
      <form onSubmit={handleLogin} className=' w-1/2'>
            <input type="text" placeholder='Username' value={Username} autoComplete="username" onChange={(e)=>setUsername(e.currentTarget.value)}  className='w-full border-b-2 outline-none p-2'/>
            <div className='flex w-full my-2 border-b-2'>
            <input type={visible ? "text" : "password"} autoComplete="current-password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.currentTarget.value)} className='w-full  outline-none p-2'/>
                <button onClick={()=> setVisible(!visible)} type='button'>show</button>
            </div>
            <button type="submit" className='bg-blue-400 w-full p-2 text-white'>Submit</button>
        </form>
      </div>
      <div className=' my-2 flex justify-center'>
        <Link to="/">Forgot Password ?</Link>
      </div>
    </div>
  )
}
export const Signup = () =>{
  const [visible, setVisible] = useState(false)
  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password , setPassword] = useState("")

    const handleLogin = (e)=>{
        e.preventDefault()
        if(Username === "" || Password === "" || Email === ""){
          alert("Something is missing...!")
        }
        else{
          const a = {
            Email,
            Username,
            Password
          }
          console.log(a)
        }
    }

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleLogin} className=' w-1/2'>
            <div className='flex flex-col w-full gap-2 '>
            <input type='email' placeholder='Email' value={Email} onChange={(e)=>setEmail(e.currentTarget.value)} className='w-full border-b-2 outline-none p-2' />
            <input type="text" placeholder='Username' autoComplete="username" value={Username} onChange={(e)=>setUsername(e.currentTarget.value)} className='w-full border-b-2 outline-none p-2' />
            
            </div>
            <div className='flex w-full my-2 border-b-2'>
            <input type={visible ? "text" : "password"} autoComplete="current-password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.currentTarget.value)} className='w-full  outline-none p-2' />
                <button onClick={()=> setVisible(!visible)} type='button'>show</button>
            </div>
            <button type="submit" className='bg-blue-400 w-full p-2 text-white'>Submit</button>
        </form>
    </div>
  )
}

const index = () => {
  const [text, setText] = useState("Login")
  const [val , setVal] = useState(false)

  const handleToggle = (e) =>{
      e.preventDefault();
      setVal(!val)
      if(val ) {
        setText("Login")
      }
      else{
        setText("Signup")
      }
  } 
    
  return (
    <div>
      <div className='w-full ' >
        <div className='my-3 flex justify-center'>
          <h2 className='text-3xl font-semibold  '>Chatapp </h2>
        </div>
        <div className='flex justify-center'>
        <button onClick={handleToggle} type='button' className=' bg-blue-400 text-white px-5 py-2 rounded '>{text}</button>
        </div>
        {val ?
         (
          // login form 
          <Login />
        )
        :
        (
          // signup form 
          <Signup />
        )
        }
      </div>
    </div>
  )
}

export default index
