import { useState } from "react"
import { NavBar, Login, Register } from "../components"

function Auth() {
  const [auth, setAuth] = useState('login')

  return (
    <div className="px-8">
      <NavBar />
      <div className="relative top-[10vh]">
        {auth === 'login' ? <Login setAuth={setAuth} /> : <Register setAuth={setAuth} />}
      </div>
    </div>
  )
}

export default Auth