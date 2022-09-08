import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { NavBar, SideBar } from '../../components';

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
  }
  `;

  const { data, error, loading } = useQuery(query)
  if (loading) return <p>Loading...</p>

  return (
    <div className="px-8">
      <NavBar />
      <div className="flex w-full">
        <SideBar data={data.class} />
        <div className='w-3/4 pl-8 pt-4'>
          <div className='flex justify-between items-center'>
            <p className='text-3xl mb-4'>Attendance</p>
            <button className='bg-green-500 hover:bg-green-600 text-white hover:text-gray-50 px-5 py-2 rounded-md font-bold'>Save Changes</button>
          </div>
          <table>
            <thead>
              <tr className='bg-violet-500 text-white'>
                <th className='p-2 text-center'>No</th>
                <th className='p-2'>Name</th>
              </tr>
            </thead>
            <tbody>
              {data.class.students.map((item, index) => {
                return (
                  <tr className='hover:bg-violet-300'>
                    <td className='p-2'>{index + 1}</td>
                    <td className='p-2'>{item.firstName}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Attendance