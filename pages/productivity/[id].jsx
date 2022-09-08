import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { NavBar, SideBar } from '../../components';

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
          <p className='text-3xl mb-4'>Productivity</p>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-rose-500 text-white'>
                <th className='p-2 text-center'>No</th>
                <th className='p-2'>Name</th>
                <th className='p-2'>Productivity Data</th>
                <th className='p-2'>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.class.students.map((item, index) => {
                return (
                  <tr className='hover:bg-rose-300'>
                    <td className='p-2'>{index + 1}</td>
                    <td className='p-2'>{item.firstName}</td>
                    <td className='p-2'>-</td>
                    <td className='p-2 text-center'>0</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export default Productivity