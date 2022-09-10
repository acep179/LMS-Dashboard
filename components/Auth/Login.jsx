import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

function Login({ setAuth }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const query = gql`
  mutation Login(
    $email:EmailAddress!
    $password: String
  ){
    login(
      input:{
        email: $email
        password: $password
      }
    ){
      token
      user{
        id
        firstName
        email
      }
    }
  }
`

  const [login, { data, error, loading }] = useMutation(query)
  if (loading) return <p>Loading...</p>

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login({ variables: { email, password } })
    console.log(data)
    localStorage.setItem("token", data.login.token)
    return console.log('login berhasil')
  }

  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <div className="w-1/3 bg-orange-500 shadow-2xl shadow-slate-800 rounded-lg p-5">
        <h1 className="mb-4 text-3xl text-center text-white font-bold">Login</h1>
        <form className='mb-4' onSubmit={(e) => handleSubmit(e)}>
          <input className="p-2 rounded-md w-full mb-3" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input className="p-2 rounded-md w-full mb-3" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button className="px-3 py-1 rounded bg-violet-600 hover:bg-violet-700 text-white text-lg">Login</button>
        </form>
        <p className='text-slate-700'>Don't have account? <span className='text-black hover:text-slate-600 cursor-pointer' onClick={() => setAuth('register')}>Register </span>here</p>
      </div>
    </div>
  )
}

export default Login