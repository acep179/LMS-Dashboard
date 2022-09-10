import React from 'react'

function Register({ setAuth }) {
  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <div className="w-1/3 bg-orange-500 shadow-2xl shadow-slate-800 rounded-lg p-5">
        <h1 className="mb-4 text-3xl text-center text-white font-bold">Register</h1>
        <form className='mb-4' action="">
          <input className="p-2 rounded-md w-full mb-3" type="text" placeholder="Name" />
          <input className="p-2 rounded-md w-full mb-3" type="email" placeholder="Email" />
          <input className="p-2 rounded-md w-full mb-3" type="password" placeholder="Password" />
          <button className="px-3 py-1 rounded bg-violet-600 hover:bg-violet-700 text-white text-lg">Register</button>
        </form>
        <p className='text-slate-700'>You have an account? <span className='hover:text-slate-600 text-black cursor-pointer' onClick={() => setAuth('login')}>Login </span>here</p>
      </div>
    </div>

  )
}

export default Register