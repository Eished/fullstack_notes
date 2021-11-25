import React from 'react'
import './index.css'
import TailwindTest from './components/TailwindTest'
import HorizontalBarChart from './HorizontalBar'
import SortTable from './components/SortTable'
import PaginationTable from './components/PaginationTable'
import EditableTable from './components/EditableTable'
import SelectionPaginationTable from './components/SelectionPaginationTable'
import SearchTable from './components/SearchTable'

import StackBarChart from './StackedBar'

import Avatar from './components/WsrTest'
// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer

function App() {
  return (
    <>
      <div className="w-3/4 m-auto mt-10 mb-10">
        <HorizontalBarChart />
      </div>
      <div>StackBarChart</div>
      <StackBarChart />
      <div>TailwindTest</div>
      <TailwindTest />
      <div>SortTable</div>
      <SortTable />
      <div>PaginationTable</div>
      <PaginationTable />
      <div>EditableTable</div>
      <EditableTable />
      <div>SelectionPaginationTable</div>
      <SelectionPaginationTable />
      <div>SearchTable</div>
      <SearchTable />
      <br></br>
      <Avatar></Avatar>
    </>
  )
}

export default App
