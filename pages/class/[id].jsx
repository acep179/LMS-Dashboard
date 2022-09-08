import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client";

import { StageOneTable, StageTwoTable, NavBar } from "../../components";

function Class() {
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
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-red-300 h-screen -ml-8 px-8 py-4">
          <p>{data.class.batch ? data.class.batch.name : "No Batch"} - Class {data.class.type}</p>
        </div>
        <div className="col-span-10 px-8 py-4">
          {data.class.type === "STAGEONE" ? <StageOneTable students={data.class.students} /> : <StageTwoTable students={data.class.students} />}
        </div>
      </div>
    </div>
  )
}

export default Class