import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import '../css/main.min.css'

import IssueCard from './modules/IssueCard'
import SearchBar from './modules/SearchBar'

function App () {
  const [issues, setIssues] = useState([])
  useEffect(() => {
    // Las llamadas a API ocurren normalmente en useEffect
    // Los corchetes son para realizar la preticion solo en el first render
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(res => res.json())
      .then(results => {
        setIssues(results)
      })
      .catch(err => console.log(err))
  }, [])

  const sendSearch = search => {
    console.log(search)
    console.log(issues)
    const items = issues.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    })
    setIssues(items)
  }

  return (
    <div className='bg-dark container-fluid text-center'>
      <div className='p-4'>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='p-5 col-2' alt='React logo' />
        </a>
        <h1 className='p-2 header-1 text-light'>React issues</h1>
      </div>
      <SearchBar handleSearch={sendSearch} />

      <div className='container p-5 justify-content-center'>
        {issues.map(issue => (
          <IssueCard issue={issue} key={issue.id} />
        ))}
      </div>
    </div>
  )
}

export default App
