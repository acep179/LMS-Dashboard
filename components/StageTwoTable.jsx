import React from 'react'
import { IoTriangle } from 'react-icons/io5'
import { BsPersonXFill, BsPersonPlusFill } from 'react-icons/bs'

function StageTwoTable({ students }) {
  return (
    <div className='w-full'>
      <div className="flex justify-between items-center mb-5">
        <div className='text-3xl'>Students</div>
        {students.length === 0 ? <div></div> : (
          <button className='px-2 py-1 bg-green-500 text-white rounded-md flex items-center'>
            <BsPersonPlusFill className='h-6 w-6 mr-3' />
            <p className='text-lg'>Add Students</p>
          </button>
        )}
      </div>
      <table className='border-collapse table-auto w-full'>
        <thead>
          <tr className='font-semibold text-center'>
            <td className='p-3 bg-amber-400  w-14'>No</td>
            <td className='p-3 bg-amber-400 '>Name</td>
            <td className='p-3 bg-amber-400 '>Attendance</td>
            <td className='p-3 bg-amber-400 '>Productivity</td>
            <td className='p-3 bg-amber-400 '>Softskill</td>
            <td className='p-3 bg-amber-400 '>Assigment</td>
            <td className='p-3 bg-amber-400 '>Total Score</td>
            <td className='p-3 bg-amber-400 '>Action</td>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => {
            return (
              <tr className='hover:bg-amber-200' key={index}>
                <td className='p-3  text-center font-semibold w-14'>{index + 1}</td>
                <td className='p-3 '>{item.firstName}</td>
                <td className='p-3  text-center'>0</td>
                <td className='p-3  text-center'>0</td>
                <td className='p-3  text-center'>0</td>
                <td className='p-3  text-center'>0</td>
                <td className='p-3  text-center'>0</td>
                <td className='p-3  text-center flex'>
                  <button className='bg-red-500  hover:bg-red-600 px-2 flex py-1 mx-auto text-white text-sm rounded-md group relative'>
                    <BsPersonXFill className="w-5 h-5" />
                    <div className='hidden group-hover:block ml-2 absolute bg-red-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                      <IoTriangle className="w-6 h-6 absolute -top-4 left-0 fill-red-200" />
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      <p className='font-semibold'>Remove Student</p>
                    </div>
                  </button>
                </td>
              </tr>
            )
          })}
          {students.length === 0 ? (
            <tr className='hover:bg-green-200'>
              <td className='p-3 text-center cursor-pointer' colSpan={8}>
                + Add Students
              </td>
            </tr>
          ) : (<div></div>)}
        </tbody>
      </table>
    </div >
  )
}

export default StageTwoTable