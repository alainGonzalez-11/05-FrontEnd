import React from 'react'
import '../../css/main.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const IssueCard = ({ issue }) => {
  return (
    <article className='container bg-light pt-3 ps-4 pe-4 text-start justify-content-center m-3'>
      <a className='row text-dark' href={issue.html_url}>
        <h2 className='header-6 col-8'>{issue.title}</h2>
        <p className='text-dark col-4 text-end'>Id: #{issue.id}</p>
      </a>
      <p>{issue.body}</p>
      <div className='row g-2'>
        {issue.labels.map(label => (
          <div className='rounded-pill p-1 m-1 bg-secondary text-center text-light col-2' key={label.id}>
            {label.name}
          </div>
        ))}
      </div>

      <a href={issue.user.html_url} className='row'>
        <i className='bi bi-person-circle d-inline-block'>
          <p className='d-inline-block ms-1'>{issue.user.login}</p>{' '}
        </i>
      </a>
    </article>
  )
}

export default IssueCard
