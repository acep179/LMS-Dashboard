import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client";

import { StageOneTable, StageTwoTable, NavBar, SideBar } from "../../components";
import { useState } from "react";

function Students() {
  const router = useRouter()
  const { id } = router.query
  const [show, setShow] = useState()

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
    attendances{
      id
      student{
        id
      }
      present
    }
    productivities{
      id
      point
      student{
        id
      }
    }
    users(where:{role:STUDENT}){
      id
      firstName
    }
  }
  `;

  const { data, error, loading } = useQuery(query)
  if (loading) return <p>Loading...</p>

  console.log(data)

  const close = () => {
    const listStudent = document.getElementById('listStudent')
    listStudent.style.display = 'none'
  }

  const openListStudent = () => {
    const listStudent = document.getElementById('listStudent')
    listStudent.style.display = 'block'
  }

  return (
    <div className="px-8">
      <div id='listStudent' className="hidden fixed z-40 h-screen w-screen bg-slate-500 bg-opacity-50 -ml-8" onClick={() => close()}>
        <div className="bg-white p-3 fixed z-50 w-1/3 max-h-80 rounded-md top-1/3 right-1/3">
          <div className="p-2 overflow-auto max-h-72">
            <h3 className="text-2xl text-center mb-5">List of Students</h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="w-10 ">No</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map((item, index) => (
                  <tr>
                    <td className="text-center p-2">{index + 1}</td>
                    <td className="p-2">{item.firstName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <NavBar />
      <div className="flex w-full">
        <SideBar data={data.class} />
        <div className='w-1/4'></div>
        <div className="pl-8 pt-4 w-3/4 mt-[10vh]">
          {data.class.type === "STAGEONE" ?
            <StageOneTable listStudent={openListStudent} students={data.class.students} attendances={data.attendances} productivities={data.productivities} />
            :
            <StageTwoTable listStudent={openListStudent} students={data.class.students} attendaces={data.attendaces} productivities={data.productivities} />}
        </div>
      </div>
    </div>
  )
}

export default Students