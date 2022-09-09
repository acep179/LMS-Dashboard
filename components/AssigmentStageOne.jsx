import { ChapterOneTable, ChapterTwoTable } from "./AssigmentTable/"
import { IoSave } from 'react-icons/io5'

function AssigmentStageOne({ students }) {
  return (
    <div>
      <h1 className='text-3xl mb-4'>Assigment</h1>
      <div className="flex justify-between items-center">
        <div className='mb-6'>
          <p>Student :</p>
          <select name="student" id="student">
            {students.map((item) => {
              return (<option value={item.id}>{item.firstName}</option>)
            })}
          </select>
        </div>
        <div>
          <button className="bg-lime-500 hover:bg-lime-600 flex items-center px-2 py-1 rounded-md font-semibold text-xl text-white">
            <IoSave className="mr-2" />
            <p>Save Changes</p>
          </button>
        </div>
      </div>
      <div className="mb-8">
        <h2 className='text-2xl mb-4'>Chapter 1</h2>
        <ChapterOneTable />
      </div>
      <div>
        <h2 className='text-2xl mb-4'>Chapter 2</h2>
        <ChapterTwoTable />
      </div>
    </div>
  )
}

export default AssigmentStageOne