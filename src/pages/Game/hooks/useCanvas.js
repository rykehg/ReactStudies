import React, { useState, useEffect, useRef } from 'react';

// Path2D for a Heart SVG
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 80;
export const canvasWidth = 960;
export const canvasHeight = 540;

export function draw(ctx, location){
  console.log("attempting to draw")
  ctx.fillStyle = 'red';
  ctx.shadowColor = 'blue';
  ctx.shadowBlur = 15;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.rotate(225 * Math.PI / 180);
  ctx.fill(SVG_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();  
};

function drawCircle(context, posX, posY, size, lineSize, lineColor, fillColor)
{
    context.beginPath()
    context.fillStyle = fillColor 
    context.lineWidth = lineSize
    context.strokeStyle = lineColor
    //context.save()
    context.arc(posX, posY, size/2, 0, 2 * Math.PI) // .arc(x, y, radius, startAngle, endAngle, anticlockwise)
    context.closePath()    
    context.stroke()
    context.fill()
    //context.restore();                 
} 

export function useCanvas(){
    const canvasRef = useRef(null);
    const [objDrag, setObjDrag] = useState([]);
    const [objStatic, setObjStatic] = useState([]);
    const [objSelected, setObjSelected] = useState();
    const [objCollided, setObjCollided] = useState();
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );
        
        // redraw each object in the objDrag[] array
        for (let i = 0; i < objDrag.length; i++) {
            const o = objDrag[i]
            //context.fillStyle = o.color
            if (o == objSelected) {
                drawCircle(ctx, o.x, o.y, o.size, o.size/7, 'yellow', o.color) 
            }
            else {
                drawCircle(ctx, o.x, o.y, o.size, 0, o.color, o.color) 
            }           
        }
        // draw all coordinates held in state
        //coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ coordinates, setCoordinates, 
              objDrag, setObjDrag, 
              objStatic, setObjStatic, 
              objSelected, setObjSelected,
              objCollided, setObjCollided,
              canvasRef, canvasWidth, canvasHeight ];
}