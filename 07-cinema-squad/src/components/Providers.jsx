import React from 'react'

const Providers = ({ data }) => {
  const addView = (title, type) => {
    if (data[type] !== undefined) {
      return (
        <div className='d-flex flex-row mx-4'>
          <h3 className='mx-2 text-light'>{title}</h3>
          {data[type].map(item => (
            <img
              key={item.provider_id}
              src={`https://image.tmdb.org/t/p/w200/${item.logo_path}`}
              alt=''
              style={{ width: '30px' }}
              className='m-1'
            />
          ))}
        </div>
      )
    }
  }

  return (
    <div className='container-xl bg-primary p-3'>
      <div className='d-flex flex-row justify-content-center'>
        {addView('View', 'flatrate')}
        {addView('Rent', 'rent')}
        {addView('Buy', 'buy')}
      </div>
    </div>
  )
}

export default Providers
