import Image from "next/image"
import Link from "next/link"

function NavBar() {
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link href="/">
        <Image className="cursor-pointer" src="/logo.png" height={40} width={55} />
      </Link>
      <div className='flex items-center'>
        <p className='text-xl'>Hello, Acep :D</p>
        <div className='w-11 aspect-square ml-4 cursor-pointer rounded-full ring ring-slate-300'></div>
      </div>
    </nav>
  )
}

export default NavBar