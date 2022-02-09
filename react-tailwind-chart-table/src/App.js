import * as React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'

// import './index.css'
import TailwindTest from './components/TailwindTest'
import HorizontalBarChart from './HorizontalBar'
import SortTable from './components/SortTable'
import PaginationTable from './components/PaginationTable'
import EditableTable from './components/EditableTable'
import SelectionPaginationTable from './components/SelectionPaginationTable'
import SearchTable from './components/SearchTable'
import ComplexTable from './components/ComplexTable'
import RowSelectionTable from './components/RowSelectionTable'
import ReactTableCard from './components/ReactTableCard'

import StackBarChart from './StackedBar'

import Avatar from './components/WsrTest'

import Validator from './components/ValidatorTest/Validator'
// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router including nested <code>&lt;Route&gt;</code>
        s, <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a "*" route (aka "splat route") to render
        a "not found" page when someone visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul className="grid-cols-4 bg-gray-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Validator</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
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
      <div>ComplexTable</div>
      <ComplexTable></ComplexTable>
      <div>RowSelectionTable</div>
      {/* <RowSelectionTable></RowSelectionTable> */}
      <Avatar></Avatar>
      <ReactTableCard
        title={'hi'}
        data={[
          { name: 'test', age: 1, test: 'afhaks' },
          { name: 'test', age: 2, test: 'afhaks' },
          { name: 'test', age: 3, test: 'afhaks' },
          { name: 'test', age: 4, test: 'afhaks' },
          { name: 'test', age: 0, test: 'afhaks' },
          { name: 'test', age: 10, test: 'afhaks' },
        ]}
      ></ReactTableCard>
    </div>
  )
}

function About() {
  return (
    <div>
      <Validator />
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
