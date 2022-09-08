import Link from 'next/link'
import React from 'react'
import { BsPeopleFill, BsCalendar3, BsPenFill } from 'react-icons/bs'
import { GrLineChart } from 'react-icons/gr'
import { MdDashboard } from 'react-icons/md'

function SideBar({ data }) {
  return (
    <div className="w-1/4 bg-red-300 -ml-8 px-4 py-4 h-[90vh]">
      <div className='bg-white px-2 py-1 rounded-md mb-20 text-xl'>
        <p>{data.batch ? data.batch.name : "No Batch"}</p>
        <p>Class {data.type}</p>
      </div>
      <ul className='bg-white rounded-lg px-4 py-1'>
        <li className='my-5 flex text-xl items-center'>
          <MdDashboard className='mr-3' />
          <Link href={`/class/${data.id}`}>
            <p className='cursor-pointer'>Dashboard</p>
          </Link>
        </li>
        <li className='my-5 flex text-xl items-center'>
          <BsPeopleFill className='mr-3' />
          <Link href={`/students/${data.id}`}>
            <p className='cursor-pointer'>Students</p>
          </Link>
        </li>
        <li className='my-5 flex text-xl items-center'>
          <BsCalendar3 className='mr-3' />
          <Link href={`/attendance/${data.id}`}>
            <p className='cursor-pointer'>Attendance</p>
          </Link>
        </li>
        <li className='my-5 flex text-xl items-center'>
          <GrLineChart className='mr-3' />
          <Link href={`/productivity/${data.id}`}>
            <p className='cursor-pointer'>Productivity</p>
          </Link>
        </li>
        <li className='my-5 flex text-xl items-center'>
          <BsPenFill className='mr-3' />
          <Link href={`/assigment/${data.id}`}>
            <p className='cursor-pointer'>Assigment</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar