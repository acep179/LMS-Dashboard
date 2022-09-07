import { useRouter } from "next/router"

function Class() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>Class {id}</div>
  )
}

export default Class