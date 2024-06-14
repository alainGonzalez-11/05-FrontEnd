import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import VideoCarousel from './VideoCarousel'
import ImageCarousel from './ImageCarousel'

const MediaSection = ({ videos, images }) => {
  return (
    <div className='container-xl bg-light'>
      <div className='row p-3 px-4 justify-content-around'>
        <h2>Media</h2>
        <div className='tabs-section'>
          <Tabs defaultActiveKey='videos' id='uncontrolled-tab-example'>
            <Tab eventKey='videos' title='Videos'>
              <div className='tab-content'>
                <VideoCarousel media={videos} />
              </div>
            </Tab>
            <Tab eventKey='backdrops' title='Backdrops'>
              <div className='tab-content'>
                <ImageCarousel media={images.backdrops} items={[3, 2]} />
              </div>
            </Tab>
            <Tab eventKey='logos' title='Logos'>
              <div className='tab-content'>
                <ImageCarousel media={images.logos} items={[3, 2]} />
              </div>
            </Tab>
            <Tab eventKey='posters' title='Posters'>
              <div className='tab-content'>
                <ImageCarousel media={images.posters} items={[5, 3]} />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default MediaSection
