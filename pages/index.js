import { NavBar, BatchCard } from "../components"
import { gql, useQuery } from "@apollo/client";

const IndexPage = () => {

  const query = gql`
  {
      batches {
        id
        name
      }
      classes{
        id
        type
        batch{
          id
          name
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(query)
  if (loading) return <p>Loading...</p>

return(
  <div className="px-8">
    <NavBar/>
    <div className="relative top-[15vh]">
        <h1 className="mb-4 text-xl text-center">Please select a Class from one of the Batches below:</h1>
        <div className="grid grid-cols-3 gap-5">
          <BatchCard batchData={data.batches} classData={data.classes}/>
        </div>
    </div>
  </div>
  )
}

export default IndexPage
