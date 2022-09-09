import Link from 'next/link';
import { IoTrashBin } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'

function BatchCard({ batchData, classData }) {

  console.log(classData)

  const classFilter = (batchID) => {
    const data = classData.filter((item) => {
      if (item.batch) {
        return item.batch.id === batchID
      }
    })
    return data
  }
  const classNoBatch = () => {
    const data = classData.filter((item) => {
      return (!item.batch)
    })
    return data
  }

  return (
    <>
      {
        batchData.map((batch, index) => {

          return (
            <div className="bg-orange-500 p-4 rounded-xl group relative" key={index}>
              <h2 className="text-center text-xl text-gray-100 font-bold my-3">{batch.name}</h2>
              <div className="grid grid-rows-2 gap-2 mt-6 peer">
                {classFilter(batch.id).map((item, index) => {
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
        })
      }
      <div className="bg-orange-500 p-4 rounded-xl group relative">
        <h2 className="text-center text-xl text-gray-100 font-bold my-3">No Batch</h2>
        <div className="grid grid-rows-2 gap-2 mt-6 peer">
          {classNoBatch().map((item) => {
            return (
              <Link href={`/class/${item.id}`}>
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
      <div className="bg-orange-500 p-4 h-max rounded-xl cursor-pointer mb-8">
        <h2 className="text-center text-xl text-gray-100 font-bold my-3">Add a Batch ++</h2>
      </div>
    </>
  )
}

export default BatchCard