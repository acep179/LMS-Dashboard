function TodoAppTable() {
  return (
    <table className='w-full table-auto'>
      <thead>
        <tr className='bg-sky-400 text-white'>
          <th className='p-2'>No</th>
          <th className='p-2 w-1/2'>Category</th>
          <th className='p-2'>Persen</th>
          <th className='p-2'>Nilai Siswa</th>
          <th className='p-2'>Calculate</th>
        </tr>
      </thead>
      <tbody>
        <tr className='hover:bg-sky-200'>
          <td className="p-2 text-center">1</td>
          <td className="p-2">Pemahaman React Native</td>
          <td className="p-2 text-center">20%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-sky-200'>
          <td className="p-2 text-center">2</td>
          <td className="p-2">Navigation</td>
          <td className="p-2 text-center">35%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-sky-200'>
          <td className="p-2 text-center">3</td>
          <td className="p-2">Integration</td>
          <td className="p-2 text-center">35%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
        <tr className='hover:bg-sky-200'>
          <td className="p-2 text-center">4</td>
          <td className="p-2">Pemahaman Instruksi</td>
          <td className="p-2 text-center">10%</td>
          <td className="p-2 text-center">0</td>
          <td className="p-2 text-center">0</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className='bg-sky-300'>
          <th className='p-2' colSpan={4}>Total</th>
          <th className='p-2'>0</th>
        </tr>
      </tfoot>
    </table>
  )
}

export default TodoAppTable