import Image from "next/image"
import Link from "next/link"

function NavBar() {
  return (
    <div className="py-4 -mx-8 px-8 w-full fixed bg-white flex justify-between items-center h-[10vh] z-10">
      <Link href="/">
        <Image className="cursor-pointer" src="/logo.png" height={40} width={55} />
      </Link>
      <div className='flex items-center'>
        <p className='text-xl'>Hello, Acep :D</p>
        <div className='w-11 aspect-square ml-4 cursor-pointer rounded-full ring ring-slate-300'></div>
      </div>
    </div>
  )
}

export default NavBar