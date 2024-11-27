import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () =>{
    const [pass, setPass] = useState(true)
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const handleLogin = (e)=>{
        e.preventDefault()
        const a = {
            Username,
            Password
        }
        console.log(a)
        setUsername("")
        setPassword("")
    }

    return (
        <div className='flex flex-col w-1/3 bg-red-300'>
        <div>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='Username' value={Username} onChange={(e)=>setUsername(e.currentTarget.value)} />
            <div>
            <input type={pass ? "text" : "password"} placeholder='Password'  value={Password} onChange={(e)=>setPassword(e.currentTarget.value)} />
                <button onClick={()=> setPass(!pass)} type='button'>Visible</button>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
        <div>
            <Link to="/">Forgot Password ? </Link>
        </div>
    </div>
    )
}

const index = () => {
  return (
    <div>
      <div>
            {/* Login Form */}
            <Login />

            {/* Signup Form */}
            {/* Forgot Password */}
      </div>
    </div>
  )
}

export default index
