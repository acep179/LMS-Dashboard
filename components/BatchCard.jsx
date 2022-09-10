import Link from 'next/link';
import { IoTrashBin } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'
import { gql, useQuery } from '@apollo/client';

const query = gql`
query ClassOfBatch($batchID:String){
  classes(where:{batchId:$batchID}){
    id
    type
    batch{
      id
      name
    }
  }
}
`

function BatchCard({ batchData }) {

  const { data, error, loading } = useQuery(query, {
    variables: { batchID: batchData.id },
  })
  if (loading) return <p>Loading...</p>

  return (
    <div className="bg-orange-500 p-4 rounded-xl group relative">
      <h2 className="text-center text-xl text-gray-100 font-bold my-3">{batchData.name}</h2>
      <div className="grid grid-rows-2 gap-2 mt-6 peer">
        {data.classes?.map((item, index) => {
          return (
            <Link key={index} href={`/class/${item.id}`}>
              <button className="bg-orange-300 rounded-md p-2 text-center hover:bg-orange-400 hover:font-semibold">{item.type}</button>
            </Link>
          )
        })}
      </div>
      <div className="bg-white hidden w-max ml-auto rounded py-1 px-2 group-hover:flex absolute top-4 right-4 peer-hover:hidden">
        <AiOutlineEdit className="w-6 h-6 fill-blue-500 hover:fill-blue-600 cursor-pointer mr-1" />
        <IoTrashBin className="w-6 h-6 fill-red-500 hover:fill-red-600 cursor-pointer" />
      </div>
    </div>
  )
}

export default BatchCard