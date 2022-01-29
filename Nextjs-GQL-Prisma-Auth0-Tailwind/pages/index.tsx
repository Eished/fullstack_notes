// /pages/index.tsx
import Head from 'next/head'
import { gql, useQuery, useMutation } from '@apollo/client'
import Link from 'next/link'
import { AwesomeLink } from '../components/AwesomeLink'

const AllLinksQuery = gql`
  query allLinksQuery($first: Int, $after: String) {
    links(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          # index
          imageUrl
          url
          title
          category
          description
          id
        }
      }
    }
  }
`

function Home() {
  const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: { first: 2 },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  const { endCursor, hasNextPage } = data.links.pageInfo

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.edges.map(({ node }, index) => (
            <AwesomeLink
              key={index}
              title={node.title}
              category={node.category}
              url={node.url}
              id={node.id}
              description={node.description}
              imageUrl={node.imageUrl}
            />
          ))}
        </div>
        {hasNextPage ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded my-10"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.links.edges = [...prevResult.links.edges, ...fetchMoreResult.links.edges]
                  return fetchMoreResult
                },
              })
            }}
          >
            more
          </button>
        ) : (
          <p className="my-10 text-center font-medium">You've reached the end! </p>
        )}
      </div>
    </div>
  )
}

export default Home
