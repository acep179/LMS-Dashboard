import React from 'react'

function ChapterOneTable() {
  return (
    <table className='w-full table-auto'>
      <thead>
        <tr className='bg-amber-400 text-white'>
          <th className='p-2'>No</th>
          <th className='p-2 w-1/2'>Category</th>
          <th className='p-2'>Persen</th>
          <th className='p-2'>Nilai</th>
          <th className='p-2'>Calculate</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">1</td>
          <td className="p-2">Card</td>
          <td className="p-2 text-center">5%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">2</td>
          <td className="p-2">Contact, Navbar, & Layouting</td>
          <td className="p-2 text-center">15%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">3</td>
          <td className="p-2">Form Submission</td>
          <td className="p-2 text-center">10%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">4</td>
          <td className="p-2">Creating Project Page</td>
          <td className="p-2 text-center">20%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">5</td>
          <td className="p-2">Count Project Duration</td>
          <td className="p-2 text-center">10%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">6</td>
          <td className="p-2">Pemahaman Code</td>
          <td className="p-2 text-center">20%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">7</td>
          <td className="p-2">Pemahaman Instruksi</td>
          <td className="p-2 text-center">15%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-amber-200'>
          <td className="p-2 text-center">8</td>
          <td className="p-2">Softskil</td>
          <td className="p-2 text-center">5%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className='bg-amber-300'>
          <th className='p-2' colSpan={4}>Total</th>
          <th className='p-2'>0</th>
        </tr>
      </tfoot>
    </table>
  )
}

export default ChapterOneTable