function BatchCard({ batchData }) {
  return (
    <>
      {
        batchData.map((item, index) => {
          return (
            <div className="bg-orange-500 p-4 rounded-xl" key={index}>
              <h2 className="text-center text-xl text-gray-100 font-bold my-3">{item.name}</h2>
              <div className="grid grid-rows-2 gap-2 mt-6">
                <button className="bg-orange-300 rounded-md p-2 text-center hover:bg-orange-400 hover:font-semibold">Stage 1</button>
                <button className="bg-orange-300 rounded-md p-2 text-center hover:bg-orange-400 hover:font-semibold">Stage 2</button>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default BatchCard