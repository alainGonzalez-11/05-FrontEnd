import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import MediaCarousel from './MediaCarousel'

const MediaSection = ({ videos }) => {
  return (
    <div className='container-xl bg-light'>
      <div className='row p-3 px-4 justify-content-around'>
        <h2>Media</h2>
        <div className='tabs-section'>
          <Tabs defaultActiveKey='home' id='uncontrolled-tab-example'>
            <Tab eventKey='home' title='Videos'>
              <div className='tab-content'>
                <MediaCarousel media={videos} />
              </div>
            </Tab>
            <Tab eventKey='profile' title='Profile'>
              <div className='tab-content'>
                <h3>Profile</h3>
                <p>This is the Profile tab content.</p>
              </div>
            </Tab>
            <Tab eventKey='contact' title='Contact'>
              <div className='tab-content'>
                <h3>Contact</h3>
                <p>This is the Contact tab content.</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default MediaSection
