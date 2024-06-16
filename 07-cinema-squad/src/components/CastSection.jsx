import React from 'react'
import CastCard from './CastCard'
import CardSlider from './CardSlider'

const CastSection = ({ credits }) => {
  const addCompleteCast = () => {
    return (
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed text-center'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='false'
              aria-controls='collapseOne'
            >
              View entire cast
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <table className='table table-striped table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Known as</th>
                  </tr>
                </thead>
                <tbody>
                  {credits.cast.map((item, index) => (
                    <tr key={item.id + '_cast_' + index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.character}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed text-center'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              View entire crew
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <table className='table table-striped table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Department</th>
                    <th scope='col'>Job</th>
                  </tr>
                </thead>
                <tbody>
                  {credits.crew.map((item, index) => (
                    <tr key={item.id + '_crew_' + index}>
                      <td>{item.name}</td>
                      <td>{item.department}</td>
                      <td>{item.job}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container-xl bg-light'>
      <div className='row p-3 px-4 justify-content-around'>
        <h2>Credits</h2>
        <hr className='hr hr-blurry' />
        <CardSlider
          mediaList={credits.cast}
          genres={null}
          CardType={CastCard}
        />
        {addCompleteCast()}
      </div>
    </div>
  )
}

export default CastSection
