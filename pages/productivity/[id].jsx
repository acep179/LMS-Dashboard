import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { NavBar, SideBar } from '../../components';
import { IoTriangle } from 'react-icons/io5'
import { RiHeartAddFill } from 'react-icons/ri'

function Productivity() {
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
    productivities{
      id
      point
      student{
        id
      }
    }
  }
  `;

  const { data: queryData, error, loading } = useQuery(query)
  if (loading) return <p>Loading...</p>

  const studentProductivity = (studentID) => {
    const data = queryData.productivities.filter((item) => {
      if (item.student) {
        return item.student.id === studentID
      }
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
          <p className='text-3xl mb-4'>Productivity</p>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-rose-500 text-white'>
                <th className='p-2 text-center'>No</th>
                <th className='p-2'>Name</th>
                <th className='p-2'>Point</th>
                <th className='p-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {queryData.class.students.map((student, index) => {
                return (
                  <tr className='hover:bg-rose-300'>
                    <td className='p-2 text-center'>{index + 1}</td>
                    <td className='p-2'>{student.firstName}</td>
                    <td className='p-2 text-center'>{studentProductivity(student.id)[0] ? studentProductivity(student.id)[0].point : 0}</td>
                    <td className='p-2 text-center'>
                      <button className='bg-lime-500 hover:bg-lime-600 px-2 py-1 mx-auto w-max text-white text-sm rounded-md group relative'>
                        <RiHeartAddFill className="w-5 h-5" />
                        <div className='hidden group-hover:block ml-2 absolute bg-lime-200 w-max text-slate-600 px-2 py-1 rounded-md -bottom-10 left-0 z-10'>
                          <IoTriangle className="w-6 h-6 absolute -top-4 left-0 fill-lime-200" />
                          <p className='font-semibold'>Add Point</p>
                        </div>
                      </button>
                    </td>
                  </tr>
                )
              })}
              {queryData.class.students.length === 0 ? (
                <tr>
                  <td className='text-center p-3 bg-rose-200' colSpan={4}> There's No Students's Data. Please, Add Students at Students Menu</td>
                </tr>
              ) : <div></div>}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export default Productivity