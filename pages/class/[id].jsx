import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react'
import dateFormat from 'dateformat';
import { NavBar, SideBar } from "../../components";
import { now } from 'lodash';

function Class() {
  const router = useRouter()
  const { id } = router.query

  const query = gql`
  {
    class(id:"${id}"){
      id
      type
      startedAt
      endedAt
      batch{
        id
        name
      }
      students{
        id
      }
    }
  }
  `;

  const { data, error, loading } = useQuery(query)
  if (loading) return <p>Loading...</p>

  return (
    <div className="px-8">
      <NavBar />
      <div className="flex w-full">
        <SideBar data={data.class} />
        <div className='w-3/4 pl-8 pt-4 grid grid-cols-3 gap-8'>
          <p className='text-3xl col-span-3 h-0'>Class Dashboard</p>
          <div className='bg-rose-500 text-white text-4xl rounded-3xl flex items-center justify-center p-0'>
            <p className='m-0'>{data.class.batch.name}</p>
          </div>
          <div className='bg-amber-500 text-white text-4xl rounded-3xl text-center flex flex-col items-center justify-center p-0'>
            <p className='mb-4'>Class</p>
            <p>{data.class.type}</p>
          </div>
          <div className='bg-violet-500 text-white text-4xl rounded-3xl text-center flex flex-col items-center justify-center'>
            <p className='mb-4'>Total Students</p>
            <p>{data.class.students ? data.class.students.length : 0}</p>
          </div>
          <div className='bg-blue-500 px-5 text-white text-3xl rounded-3xl text-center flex flex-col items-center justify-center'>
            <p>Started At:</p>
            <p>{dateFormat(data.class.startedAt, 'dddd, d mmmm yyyy')}</p>
          </div>
          <div className='bg-green-500 px-5 text-white text-3xl rounded-3xl text-center flex flex-col items-center justify-center'>
            <p>Time Remaining:</p>
            <p>{Number(data.class.endedAt) - Number(Date(now))}</p>
          </div>
          <div className='bg-green-500 px-5 text-white text-3xl rounded-3xl text-center flex flex-col items-center justify-center'>
            <p>Ended At:</p>
            <p>{dateFormat(data.class.endedAt, 'dddd, d mmmm yyyy')}</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Class