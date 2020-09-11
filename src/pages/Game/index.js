import React, { useRef, useEffect } from 'react'

import './styles.css'
import board from './assets/ProcessadorGameTabuleiro.png'

function App() {
  const canvas = useRef()
  let ctx = null
  const boxes = [
    { x: 200, y: 220, w: 50, h: 50 },
    { x: 100, y: 120, w: 50, h: 50 }
  ]
  let objDrag = []
  let objStatic = []
  let objSelected = null
  let objCollided = null
  let isDown = false
  let dragTarget = null
  let startX = null
  let startY = null
 
  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current
    canvasEle.width = canvasEle.clientWidth
    canvasEle.height = canvasEle.clientHeight
 
    // get context of the canvas
    ctx = canvasEle.getContext("2d")
  }, []);
 
  useEffect(() => {
    draw()
  }, [])
 
  // draw rectangle
  const draw = () => {
    ctx.clearRect(0, 0, canvas.current.clientWidth, canvas.current.clientHeight)
    const img = document.getElementById("boardImage")
    ctx.drawImage(img, 0, 0)
    boxes.map(info => drawRectangle(info))
    boxes.map(info => drawCircle(info))
  }
 
  // draw rectangle with background
  const drawRectangle = (info, style = {}) => {
    const { x, y, w, h } = info
    const { backgroundColor = 'black' } = style
 
    ctx.beginPath()
    ctx.fillStyle = backgroundColor
    ctx.fillRect(x, y, w, h)
  }

    // draw rectangle with background
    const drawCircle = (info, style = {}) => {
      const { x, y, w, h } = info
      const { backgroundColor = 'red' } = style
   
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.strokeStyle = backgroundColor
      ctx.fillStyle = backgroundColor 
      ctx.arc(x+(h/2), y+(h/2), h/2, 0, 2 * Math.PI) // .arc(x, y, radius, startAngle, endAngle, anticlockwise)
      ctx.closePath()
      ctx.stroke()
      ctx.fill()
    }
 
  // identify the click event in the rectangle
  const hitBox = (x, y) => {
    let isTarget = null
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i]
      if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) {
        dragTarget = box
        isTarget = true
        break
      }
    }
    return isTarget
  }
 
  const handleMouseDown = e => {
    startX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    startY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    isDown = hitBox(startX, startY)
  }
  
  const handleMouseMove = e => {
    if (!isDown) return
 
    const mouseX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    const mouseY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    const dx = mouseX - startX
    const dy = mouseY - startY
    startX = mouseX
    startY = mouseY
    dragTarget.x += dx
    dragTarget.y += dy
    draw()
  }
  const handleMouseUp = e => {
    dragTarget = null
    isDown = false
  }
  const handleMouseOut = e => {
    handleMouseUp(e)
  }
 
  return (
    <div className="App">
      <img id='boardImage' src={board} alt='tabuleiro' style={{display: 'none'}}/>
      <canvas
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        ref={canvas}></canvas>
    </div>
  );
}
 
export default App