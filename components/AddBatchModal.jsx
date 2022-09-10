import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const createBatch = gql`
  mutation addBatch(
    $batchName: String
    $startedAt: DateTime
    $endedAt: DateTime
  ){
    createBatch(
      input:{
        name:$batchName
        startedAt:$startedAt
        endedAt:$endedAt
      }
    ){
      id
      name
      startedAt
      endedAt
    }
  }
`;

function AddBatchModal() {

  const [form, setForm] = useState({
    batchName: '',
    startedAt: '',
    endedAt: '',
  })

  const [addBatch, { data: batchData, error: batchError, loading: batchLoading }] = useMutation(createBatch)
  if (batchLoading) return <p>Loading...</p>

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const close = () => {
    const modalBg = document.getElementById('modalBg')
    const addBatch = document.getElementById('addBatch')
    modalBg.style.display = 'none'
    addBatch.style.display = 'none'
  }

  const { batchName, startedAt, endedAt } = form

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addBatch({ variables: { batchName, startedAt, endedAt } })
    console.log(batchData)
    return console.log('Batch Berhasil Ditambahkan')
  }

  return (
    <div>
      <div id='modalBg' className="hidden fixed z-40 h-screen w-screen bg-slate-500 bg-opacity-50 -ml-8" onClick={() => close()}></div>
      <div id='addBatch' className="bg-amber-50 p-3 hidden fixed z-50 w-1/3 rounded-md top-1/3 right-1/3">
        <form className="p-2 overflow-auto" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-2xl text-center mb-4 mt-2">ADD A BATCH</h1>
          <div>
            <label className="w-full p-2" htmlFor="startedAt">Batch Name:</label>
            <input className="p-2 w-full my-2 border border-slate-400 rounded-md" name="batchName" onChange={(e) => handleOnChange(e)} type='text' placeholder="Batch x (the x is number of the Batch)" />
          </div>
          <div className="flex gap-2 mb-4">
            <div className="w-1/2 flex flex-col mb-2">
              <label className="p-2" htmlFor="startedAt">Started At:</label>
              <input className="w-full p-2 border border-slate-400 rounded-md" name="startedAt" onChange={(e) => handleOnChange(e)} type='date' id="startedAt" />
            </div>
            <div className="w-1/2 flex flex-col mb-2 ">
              <label className="p-2" htmlFor="endedAt">Ended At:</label>
              <input className="w-full p-2 border border-slate-400 rounded-md" name="endedAt" onChange={(e) => handleOnChange(e)} type='date' id="endedAt" />
            </div>
          </div>
          <button className="px-2 py-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md">Add Batch</button>
        </form>
      </div>
    </div>
  )
}

export default AddBatchModal