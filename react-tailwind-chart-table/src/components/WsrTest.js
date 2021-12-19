import useSWR from 'swr'

const fetcher = (...args) =>
  fetch(...args).then((res) => {
    return res.json()
  })

function useUser(id) {
  const { data, error } = useSWR(`/test.json`, fetcher)

  console.log(data)
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id)
  console.log(user, 'user')

  if (isLoading) return <div>isLoading</div>
  if (isError) return <div>isError</div>
  return (
    <div>
      hello
      <br />
      <div>{user.name}</div>
    </div>
  )
}
