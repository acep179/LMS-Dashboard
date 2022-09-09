import { NavBar } from "../components"

function Auth() {
  return (
    <div className="px-8">
      <NavBar />
      <div className="relative top-[10vh]">
        <div className="flex justify-center items-center w-full h-[80vh]">
          <div className="bg-orange-500 shadow-2xl shadow-slate-800 rounded-lg p-5">
            <h1 className="mb-4 text-3xl text-center text-white font-bold">Login</h1>
            <form action="">
              <input className="p-2 rounded-md w-full mb-3" type="email" placeholder="Email" />
              <input className="p-2 rounded-md w-full mb-3" type="password" placeholder="Password" />
              <button className="px-3 py-1 rounded bg-violet-600 hover:bg-violet-700 text-white text-lg">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth