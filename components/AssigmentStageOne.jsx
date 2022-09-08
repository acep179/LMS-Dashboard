import ChapterOne from "./AssigmentTable/ChapterOne"
import ChapterTwo from "./AssigmentTable/ChapterTwo"

function AssigmentStageOne({ students }) {
  return (
    <div>
      <h1 className='text-3xl mb-4'>Assigment</h1>
      <div className='mb-6'>
        <p>Student :</p>
        <select name="student" id="student">
          {students.map((item) => {
            return (<option value={item.id}>{item.firstName}</option>)
          })}
        </select>
      </div>
      <div className="mb-8">
        <h2 className='text-2xl mb-4'>Chapter 1</h2>
        <ChapterOne />
      </div>
      <div>
        <h2 className='text-2xl mb-4'>Chapter 2</h2>
        <ChapterTwo />
      </div>
    </div>
  )
}

export default AssigmentStageOne