

export function creatGame() {
  const state = {
      players: { },
      piecesInPlay: [],
      tiles: []
  }
  
  let piecesCount = 0

  function addPlayer(command) {
      const playerId = command.playerId
      const xStart = command.xStart
      const yStart = command.yStart
      const playerColor = command.playerColor
      const currentTile = command.currentTile
      let isLocked = command.isLocked
      let pieces 
      state.players[playerId] = {
          color: playerColor,
          isLocked: isLocked,
          pieces: []
      } 
      addPlayerPiece({ playerId: playerId, posX: xStart, posY: yStart, currentTile: currentTile })
  }

  function removePlayer(command) {
      const playerId = command.playerId
      delete state.players[playerId]
  } 

  function addPlayerPiece (command) {
      const playerId = command.playerId
      const pieceId = ++piecesCount
      const posX = command.posX 
      const posY = command.posY 
      const currentTile = command.currentTile
      const color = state.players[playerId].color
      var isLocked = state.players[playerId].isLocked
      //{ x: 125, y: 85, size: 10, color: "red", isDragging: false, isLocked: false}
      state.players[playerId].pieces.push({
          playerId: playerId,
          pieceId: pieceId,
          color: color,
          isDragging: false,
          size: 15,
          x: posX,
          y: posY,
          isLocked: isLocked,
          currentTile: currentTile
      })
      addPiecesInPlay()
  }

  function removePlayerPiece(command) {
      const playerId = command.playerId
      const pieceId = command.pieceId
      const pieceToRemove = state.players[playerId].pieces.findIndex(p => p.pieceId == pieceId)

      let removedPiece = state.players[playerId].pieces.splice(pieceToRemove, 1)
      addPiecesInPlay()
      return removedPiece
  } 

  //Update player piece status in state player 
  function setPieceNewStatus(command) {
      const playerId = command.playerId
      const pieceId = command.pieceId
      const newX = command.posX
      const newY = command.poxY
      const newTile = command.currentTile
      const playerP = state.players[playerId]
      for (const piece in playerP.pieces) {
          const newPositionPiece = playerP.pieces[piece] 
          if(newPositionPiece.pieceId == pieceId) {
              state.players[playerId].pieces[piece].x = newX
              state.players[playerId].pieces[piece].y = newY
              state.players[playerId].pieces[piece].currentTile = newTile
          }
      }
      addPiecesInPlay()
  }

  //Add all players all pieces to piecesInPlay that actually are going to be used in the game
  function addPiecesInPlay() {
      state.piecesInPlay = []
      const gameState = state
      for(const playerId in gameState.players)
      {
          const playerP = gameState.players[playerId]
          for (const piece in playerP.pieces) {
              const piceToAdd = playerP.pieces[piece]
              state.piecesInPlay.push({
                  playerId: piceToAdd.playerId,
                  pieceId: piceToAdd.pieceId,
                  color: piceToAdd.color,
                  isDragging: piceToAdd.isDragging,
                  size: piceToAdd.size,
                  x: piceToAdd.x,
                  y: piceToAdd.y,
                  isLocked: piceToAdd.isLocked,
                  currentTile: piceToAdd.currentTile
              })
          }
      }  
  }

  function addTile(command){
      const tileId = command.tileId
      const posX = command.posX
      const posY = command.posY
      const sizeX = command.sizeX
      const sizeY = command.sizeY
      const color = command.color
      
      state.tiles.push({
          tileId: tileId,
          posX: posX,
          posY: posY,
          sizeX: sizeX,
          sizeY: sizeY,
          color: color
      })
  }

  function removeTile(command) {
      const tileId = command.tileId
      delete state.tiles[tileId]
  }

  return {
      addPlayer,
      removePlayer,
      addPlayerPiece,
      removePlayerPiece,
      addPiecesInPlay, 
      addTile,
      removeTile,
      setPieceNewStatus,
      state
  }
}