import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client";

import { StageOneTable, StageTwoTable, NavBar, SideBar } from "../../components";

function Students() {
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
        <div className="pl-8 pt-4 w-3/4">
          {data.class.type === "STAGEONE" ? <StageOneTable students={data.class.students} /> : <StageTwoTable students={data.class.students} />}
        </div>
      </div>
    </div>
  )
}

export default Students