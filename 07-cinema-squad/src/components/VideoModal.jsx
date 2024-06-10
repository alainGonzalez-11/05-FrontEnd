// src/VideoModal.js
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const VideoModal = ({ videoId }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <img
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt='YouTube Video Thumbnail'
        className='m-2'
        onClick={handleShow}
        style={{ cursor: 'pointer', width: '100%', maxWidth: '500px' }}
      />

      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>YouTube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe
                  className='embed-responsive-item'
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allowFullScreen
                  title='YouTube video'
                  //   style={{ height: '400px', width: '500px' }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoModal
