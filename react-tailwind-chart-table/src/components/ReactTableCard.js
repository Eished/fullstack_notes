import { useMemo } from 'react'
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table'

export default function ReactTableCard({ title, data, searchBar = true }) {
  const colHeader = (headerItem) => {
    if (headerItem === 'name') {
      return {
        Header: headerItem,
        accessor: headerItem,
        Cell: (props) => {
          return <em>{props.value}</em>
        },
      }
    } else {
      return {
        Header: headerItem,
        accessor: headerItem,
      }
    }
  }

  const memoColumns = useMemo(() => {
    const headers = Object.keys(data[0]).map(colHeader)
    // push columns
    return headers
  }, [data])

  const memoData = useMemo(() => data, [data])

  const memoTitle = useMemo(() => title, [title])

  const defaultSort = () => {
    const headers = Object.keys(data[0]).map(colHeader)
    return headers.filter((col) => (col.Header === 'name' ? { id: 'total', desc: true } : { id: 'sum', desc: true }))
  }

  const tableInstance = useTable(
    {
      columns: memoColumns,
      data: memoData,
      initialState: {
        sortBy: [defaultSort()],
      },
      disableSortRemove: true,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance

  return (
    <div>
      {memoTitle && (
        <div>
          <h3>{memoTitle}</h3>
        </div>
      )}
      {searchBar && (
        <div>
          <h3>searchBar</h3>
          <input type="text" value={globalFilter || ''} onChange={(e) => setGlobalFilter(e.target.value)} />
        </div>
      )}

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted ? column.isSortedDesc ? <h5>asc sort</h5> : <h5>desc sort</h5> : 'no sort'}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
          {pageSize - page.length > 0 && <tr style={{ height: (pageSize - page.length) * 32 }}></tr>}
        </tbody>
      </table>

      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
