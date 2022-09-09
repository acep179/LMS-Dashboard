import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { NavBar, SideBar } from '../../components';
import { IoTriangle, IoSave } from 'react-icons/io5'

function Attendance() {
  const router = useRouter()
  const { id } = router.query

  const query = gql`
  {
    class(id:"${id}"){
      id
      type
      batch{
        id
        name
      }
      students{
        id
        firstName
      }
    }
    attendances{
      id
      student{
        id
      }
      present
      sick
      permission
      absent
    }
  }
  `;

  const { data: queryData, error, loading } = useQuery(query)
  if (loading) return <p>Loading...</p>


  const studentAttendance = (studentID) => {
    const data = queryData.attendances.filter((item) => {
      return item.student.id === studentID
    })
    return data
  }

  return (
    <div className="px-8">
      <NavBar />
      <div className="flex w-full">
        <SideBar data={queryData.class} />
        <div className='w-1/4'></div>
        <div className='w-3/4 pl-8 pt-4 mt-[10vh]'>
          <p className='text-3xl mb-4'>Attendance</p>
          <table className='table-auto w-full'>
            <thead>
              <tr className='bg-violet-500 text-white'>
                <th className='p-2 text-center'>No</th>
                <th className='p-2'>Name</th>
                <th className='p-2'>Present</th>
                <th className='p-2'>Sick</th>
                <th className='p-2'>Permission</th>
                <th className='p-2'>Absent</th>
                <th className='p-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {queryData.class.students.map((student, index) => {
                return (
                  <tr key={index} className='hover:bg-violet-300'>
                    <td className='p-2'>{index + 1}</td>
                    <td className='p-2'>{student.firstName}</td>
                    <td className='p-2 text-center'>{studentAttendance(student.id)[0] ? studentAttendance(student.id)[0].present : 0}</td>
                    <td className='p-2 text-center'>{studentAttendance(student.id)[0] ? studentAttendance(student.id)[0].sick : 0}</td>
                    <td className='p-2 text-center'>{studentAttendance(student.id)[0] ? studentAttendance(student.id)[0].permission : 0}</td>
                    <td className='p-2 text-center'>{studentAttendance(student.id)[0] ? studentAttendance(student.id)[0].absent : 0}</td>
                    <td className='p-2 text-center'>
                      <button className='bg-lime-500 hover:bg-lime-600 px-2 py-1 mx-auto text-white text-sm rounded-md group relative'>
                        <IoSave className="w-5 h-5" />
                        <div className='hidden group-hover:block ml-2 absolute bg-lime-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                          <IoTriangle className="w-6 h-6 absolute -top-4 left-0 fill-lime-200" />
                          <p className='font-semibold'>Save Update</p>
                        </div>
                      </button>
                    </td>
                  </tr>
                )
              })}
              {queryData.class.students.length === 0 ? (
                <tr>
                  <td className='text-center p-3 bg-violet-200' colSpan={7}> There's No Students's Data. Please, Add Students at Students Menu</td>
                </tr>
              ) : <div></div>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Attendance