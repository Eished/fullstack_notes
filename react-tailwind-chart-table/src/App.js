import React from 'react';
import './index.css';
import TailwindTest from './components/TailwindTest';
import HorizontalBarChart from './HorizontalBar';

import StackBarChart from './StackedBar';
// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer

function App() {
  return (
    <>
      <div className='w-3/4 m-auto mt-10 mb-10'>
        <HorizontalBarChart />
      </div>
      <StackBarChart />
      <TailwindTest />
    </>
  );
}

export default App;
