import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { NavBar, SideBar, AssigmentStageOne, AssigmentStageTwo } from '../../components';
import { IoTriangle } from 'react-icons/io5'
import { RiHeartAddFill } from 'react-icons/ri'

function Assigment() {
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
        <div className='w-1/4'></div>
        <div className='w-3/4 pl-8 pt-4 mt-[10vh]'>
          {data.class.type === "STAGEONE" ? <AssigmentStageOne students={data.class.students} /> : <AssigmentStageTwo students={data.class.students} />}
        </div>
      </div>
    </div>
  )
}

export default Assigment