import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useCanvas } from './hooks/useCanvas';

import api from '../../services/api';

import './styles.css'

export default function Game() {
  const history = useHistory();
  const userName = localStorage.getItem('userName');
  let dragok = false
  let startX
  let startY

  const [ coordinates, setCoordinates, 
          objDrag, setObjDrag, 
          objStatic, setObjStatic, 
          objSelected, setObjSelected,
          objCollided, setObjCollided,
          canvasRef, canvasWidth, canvasHeight  ] = useCanvas();
          
  const currentObjDrag = { playerId: "Player1", xStart: 803, yStart: 68, playerColor: 'Red', isLocked: false, currentTile: "MP" }

  const startGame = (event) => {
    setObjDrag([...objDrag, currentObjDrag])
}
  const handleCanvasClick=(event)=>{
    // on each click get current mouse location 
    const currentCoord = { x: event.clientX, y: event.clientY };
    console.log(event)
    // add the newest mouse location to an array in state 
    setCoordinates([...coordinates, currentCoord]);
  };

  const handleCanvasMouseDown=(event)=>{ 
    //console.log(`Mouse down, drag ${dragok} and selected obj ${objSelected}`)                         
    // tell the browser we're handling this mouse event
    event.preventDefault()
    event.stopPropagation()                
    // get the current mouse position
    let mx = parseInt(event.clientX) // - offsetX)
    let my = parseInt(event.clientY) // - offsetY)
    // unselect object
    setObjSelected(objSelected, null)
    setObjCollided(objCollided, null)
    // test each obj to see if mouse is inside
    const objDragOld = objDrag
    dragok = false    
    for (let i = 0; i < objDrag.length; i++) {
        const o = objDrag[i]
        if (mx > o.x && mx < o.x+3 + o.size && my > o.y && my < o.y+3 + o.size) {
            // if yes, set that obj isDragging=true
            dragok = true
            o.isDragging = true
            // select object                        
            setObjSelected(objSelected, o)    
            setObjDrag(objDragOld, o)                     
        }
    }
    // save the current mouse position
    startX = mx
    startY = my
    //Draw on canvas    
  }

  const handleCanvasMouseMove=(event)=>{
    //console.log(`Mouse moving, drag ${dragok}`)
    // if we're dragging anything...
    if (dragok && objSelected.pieceId > 6) {
      // tell the browser we're handling this mouse event
      event.preventDefault()
      event.stopPropagation()
      // get the current mouse position
      const mx = parseInt(event.clientX) // - offsetX)
      const my = parseInt(event.clientY) // -offsetY)
      // calculate the distance the mouse has moved, since the last mousemove
      const dx = mx - startX
      const dy = my - startY
      //                   
      const o = objSelected
      if (o.isDragging) {
          o.x += dx
          o.y += dy
          setObjSelected(objSelected, o) 
      }
      //objCollided = checkForCollision(objSelected, objStatic)                    
      // redraw the scene with the new object positions
      //draw()
      
      // reset the starting mouse position for the next mousemove
      startX = mx
      startY = my
    }
  }
  const handleCanvasMouseUp=(event)=>{ 
    //console.log(`Mouse up and drag ${dragok}`)
    // tell the browser we're handling this mouse event
    event.preventDefault()
    event.stopPropagation()
    // check for collision on mouse up if dragging
/*     if(dragok){                    
        objCollided = checkForCollision(objSelected, objStatic)
        //correção feita de forma errada para acertar a posição das peças no game.state
        if(objCollided){
            updateGameState()
            dragok = false
            for (let i = 0; i < objDrag.length; i++) {                    
            objDrag[i].isDragging = false                    
            } 
        }
        else{
            objCollided = null
        }
    } */
    // clear all the dragging flags **Old
    if(dragok)
    {
      dragok = false
      const o = objDrag
      for (let i = 0; i < o.length; i++) {                    
          o[i].isDragging = false
          setObjDrag(objDrag, o) 
      }      
    }      
    // redraw the scene
    //draw()
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>        
        <Link className="button" to="/profile">Voltar</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>        
      </header>
      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove ={handleCanvasMouseMove}
        onMouseUp={handleCanvasMouseUp}        
         />

      <div className="button" >
        <button onClick={startGame} > CLEAR </button>
      </div>
    </div>
  );
}