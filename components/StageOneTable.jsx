import React from 'react'
import { IoTriangle } from 'react-icons/io5'
import { BsPersonXFill, BsPersonPlusFill } from 'react-icons/bs'

function StageOneTable({ students, attendances, productivities }) {

  const studentAttendance = (studentID) => {
    const data = attendances.filter((item) => {
      if (item.student) {
        return item.student.id === studentID
      }
    })
    return data
  }
  const studentProductivity = (studentID) => {
    const data = productivities.filter((item) => {
      if (item.student) {
        return item.student.id === studentID
      }
    })
    return data
  }

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-5'>
        <p className='text-3xl'>Students</p>
        {students.length === 0 ? <div></div> : (
          <button className='px-2 py-1 bg-green-500 text-white rounded-md flex items-center'>
            <BsPersonPlusFill className='h-6 w-6 mr-3' />
            <p className='text-lg'>Add Students</p>
          </button>
        )}
      </div>
      <table className='table-auto w-full'>
        <thead>
          <tr className='font-semibold text-center'>
            <td className='p-3 bg-amber-400 w-14'>No</td>
            <td className='p-3 bg-amber-400'>Name</td>
            <td className='p-3 bg-amber-400'>Attendance</td>
            <td className='p-3 bg-amber-400'>Productivity</td>
            <td className='p-3 bg-amber-400'>Assigment</td>
            <td className='p-3 bg-amber-400'>Total Score</td>
            <td className='p-3 bg-amber-400'>Action</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr className='hover:bg-amber-200' key={index}>
                <td className='p-3 text-center font-semibold w-14'>{index + 1}</td>
                <td className='p-3'>{student.firstName}</td>
                <td className='p-3 text-center'>{studentAttendance(student.id)[0] ? studentAttendance(student.id)[0].present : 0}</td>
                <td className='p-3 text-center'>{studentProductivity(student.id)[0] ? studentProductivity(student.id)[0].point : 0}</td>
                <td className='p-3 text-center'>0</td>
                <td className='p-3 text-center'>0</td>
                <td className='p-3 text-center flex'>
                  <button className='bg-red-500 hover:bg-red-600 px-2 py-1 mx-auto text-white text-sm rounded-md group relative'>
                    <BsPersonXFill className="w-5 h-5" />
                    <div className='hidden group-hover:block ml-2 absolute bg-red-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                      <IoTriangle className="w-6 h-6 absolute -top-4 left-0 fill-red-200" />
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

export default StageOneTable