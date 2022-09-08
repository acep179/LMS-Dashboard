import React from 'react'
import Link from 'next/link'

function StageOneTable({ students }) {
  return (
    <div>
      <div>Students of Stage One Class</div>
      <table className='border-collapse table-fixed w-full'>
        <thead>
          <tr className='font-semibold text-center'>
            <td className='p-3 bg-amber-400 border border-slate-600 w-14'>No</td>
            <td className='p-3 bg-amber-400 border border-slate-600'>Name</td>
            <td className='p-3 bg-amber-400 border border-slate-600'>Attendance</td>
            <td className='p-3 bg-amber-400 border border-slate-600'>Productivity</td>
            <td className='p-3 bg-amber-400 border border-slate-600'>Assigment</td>
            <td className='p-3 bg-amber-400 border border-slate-600'>Total Score</td>
            <td className='p-3 bg-amber-400 border border-slate-600'>Action</td>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => {
            return (
              <tr className='hover:bg-amber-200' key={index}>
                <td className='p-3 border border-slate-600 text-center font-semibold w-14'>{index + 1}</td>
                <td className='p-3 border border-slate-600'>{item.firstName}</td>
                <td className='p-3 border border-slate-600 text-center'>0</td>
                <td className='p-3 border border-slate-600 text-center'>0</td>
                <td className='p-3 border border-slate-600 text-center'>0</td>
                <td className='p-3 border border-slate-600 text-center'>0</td>
                <td className='p-3 border border-slate-600 text-center flex'>

                  <button className='bg-green-500 px-2 flex py-1 text-white text-sm rounded-md group mr-2 relative'>
                    <Link href={`/add-score/${item.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 z-0 relative">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </Link>

                    <div className='hidden group-hover:block ml-2 absolute bg-green-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 absolute -rotate-90 -top-4 left-0 fill-green-200">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                      <p className='font-semibold'>Edit Score</p>
                    </div>

                  </button>

                  <button className='bg-red-500 px-2 flex py-1 text-white text-sm rounded-md group relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                      <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>

                    <div className='hidden group-hover:block ml-2 absolute bg-red-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 absolute -rotate-90 -top-4 left-0 fill-red-200">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                      <p className='font-semibold'>Remove Student</p>
                    </div>
                  </button>
                </td>
              </tr>
            )
          })}
          <tr className='hover:bg-green-200'>
            <td className='p-3 border border-slate-600 text-center cursor-pointer' colSpan={7}>
              + Add Students
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StageOneTable