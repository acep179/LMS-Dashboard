import { NavBar, BatchCard, AddBatchModal } from "../components"
import { gql, useQuery } from "@apollo/client";

const query = gql`
{
    batches {
      id
      name
    }
  }
`;

const IndexPage = () => {

  const { data, error, loading } = useQuery(query)
  if (loading) return <p>Loading...</p>

  const showModal = () => {
    const modalBg = document.getElementById('modalBg')
    const addBatch = document.getElementById('addBatch')
    modalBg.style.display = 'block'
    addBatch.style.display = 'block'
  }

return(
  <div className="px-8">
    <AddBatchModal/>
    <NavBar/>
    <div className="relative top-[15vh]">
        <h1 className="mb-4 text-xl text-center">Please select a Class from one of the Batches below:</h1>
        <div className="grid grid-cols-3 gap-5">
          {data.batches.map((item, index) =>{
            return(
              <BatchCard key={index} batchData={item}/>
            )
          })}
          
      <div onClick={showModal} className="bg-orange-500 p-4 h-max rounded-xl cursor-pointer mb-8">
        <h2 className="text-center text-xl text-gray-100 font-bold my-3">Add a Batch ++</h2>
      </div>
        </div>
    </div>
  </div>
  )
}

export default IndexPage
