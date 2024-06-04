import React from 'react'
import '../../css/main.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const IssueCard = ({ issue }) => {
  return (
    <article className='container bg-light pt-3 ps-4 pe-4 col-10 text-start'>
      <div className='row'>
        <h2 className='header-6 col-8'>Issue</h2>
        <p className='text-dark col-4 text-end'>Id: #1314242</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis
        voluptates alias eligendi quisquam laborum nemo! Cum iure dolores rem ab
        a, nobis et illum magni suscipit ducimus nesciunt eius praesentium
        cumque, non inventore excepturi voluptatibus quibusdam doloribus labore
        eaque quis architecto optio nisi illo.
      </p>
      <div className='row g-2'>
        <div className='rounded-pill p-1 m-1 bg-primary text-center text-light col-2'>
          Sterred
        </div>
        <div className='rounded-pill p-1 m-1 bg-primary text-center text-light col-2'>
          Sterred
        </div>
      </div>

      <a href='#' className='row'>
        <i className='bi bi-person-circle d-inline-block'>
          <p className='d-inline-block ms-1'>Username</p>{' '}
        </i>
      </a>
    </article>
  )
}

export default IssueCard
