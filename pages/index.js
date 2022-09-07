import { NavBar, BatchCard } from "../components"

import { gql, useQuery } from "@apollo/client";

const batchesData = gql`
{
    batches {
      id
      name
    }
  }
`;

const IndexPage = () => {
  const { data, error, loading } = useQuery(batchesData)
  if (loading) return <p>Loading...</p>

return(

  <div className="px-8">
    <NavBar/>
    <h1 className="mb-4 text-xl text-center">Please select a Class from one of the Batches below:</h1>
    <div className="grid grid-cols-3 gap-5">
      <BatchCard batchData={data.batches}/>
    </div>
  </div>
  )
}

export default IndexPage
