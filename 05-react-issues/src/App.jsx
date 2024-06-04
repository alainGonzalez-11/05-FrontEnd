import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../css/main.min.css'

import IssueCard from './modules/IssueCard'

function App () {
  return (
    <div className='bg-dark container-fluid text-center'>
      <div className='p-4'>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='p-5 col-2' alt='React logo' />
        </a>
        <h1 className='p-2 header-1 text-light'>React issues</h1>
      </div>
      <div className='container p-5 text-center'>
        <IssueCard />
      </div>
    </div>
  )
}

export default App
