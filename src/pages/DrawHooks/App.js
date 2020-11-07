import React, { useState }from 'react'
//https://blog.koenvangilst.nl/react-hooks-with-canvas/
import { usePersistentCanvas } from './hooks'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

function App() {
  const [locations, setLocations, canvasRef] = usePersistentCanvas()

  function handleCanvasClick(e) {
    setLocations([...locations, { x: e.clientX, y: e.clientY }])
  }

  function handleClear() {
    setLocations([])
  }

  function handleUndo() {
    setLocations(locations.slice(0, -1))
  }

  const [show, setShow] = useState(false);
  return (
    <div className="hooks">
      <Row>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
      />
      </Row>
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!
              <div className="controls">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleUndo}>Undo</button>
              </div>
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row>
    </div>
  )
}

export default App