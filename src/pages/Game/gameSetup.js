import creatGame from './gameState'

const game = creatGame()

//Player
game.addPlayer({ playerId: "Player1", xStart: 803, yStart: 68, playerColor: 'Red', isLocked: false, currentTile: "MP" })
game.addPlayer({ playerId: 'Player2', xStart: 803, yStart: 92, playerColor: 'Blue', isLocked: false, currentTile: "MP" })
game.addPlayer({ playerId: 'Player3', xStart: 803, yStart: 116, playerColor: 'DarkOrange', isLocked: false, currentTile: "MP" })
game.addPlayer({ playerId: 'Player4', xStart: 803, yStart: 140, playerColor: 'HotPink', isLocked: false, currentTile: "MP" })
game.addPlayer({ playerId: 'Player5', xStart: 803, yStart: 164, playerColor: 'DarkOrchid', isLocked: false, currentTile: "MP" })
game.addPlayer({ playerId: 'Player6', xStart: 803, yStart: 188, playerColor: 'Teal', isLocked: false, currentTile: "MP" })

//Tiles
game.addTile({ tileId: "MP", posX: 789, posY: 54, sizeX: 60, sizeY: 460, color: "Lime" })
game.addTile({ tileId: "RDM", posX: 620, posY: 135, sizeX: 85, sizeY: 35, color: "Lime" })
game.addTile({ tileId: "REM", posX: 620, posY: 205, sizeX: 85, sizeY: 35, color: "Lime" })
game.addTile({ tileId: "CI", posX: 485, posY: 220, sizeX: 77, sizeY: 35, color: "Lime" })
game.addTile({ tileId: "RiDi", posX: 393, posY: 345, sizeX: 111, sizeY: 97, color: "Lime" })
game.addTile({ tileId: "UC", posX: 212, posY: 406, sizeX: 110, sizeY: 35, color: "Lime" })
game.addTile({ tileId: "R1", posX: 368, posY: 179, sizeX: 105, sizeY: 17, color: "Lime" })
game.addTile({ tileId: "R2", posX: 368, posY: 198, sizeX: 105, sizeY: 17, color: "Lime" })
game.addTile({ tileId: "R3", posX: 368, posY: 216, sizeX: 105, sizeY: 17, color: "Lime" })
game.addTile({ tileId: "R4", posX: 368, posY: 235, sizeX: 105, sizeY: 17, color: "Lime" })
game.addTile({ tileId: "UAL", posX: 133, posY: 98, sizeX: 177, sizeY: 142, color: "Lime" })
game.addTile({ tileId: "Monitor", posX: 892, posY: 223, sizeX: 52, sizeY: 44, color: "Lime" })
game.addTile({ tileId: "Speaker", posX: 891, posY: 279, sizeX: 57, sizeY: 42, color: "Lime" })
game.addTile({ tileId: "Hd", posX: 898, posY: 337, sizeX: 44, sizeY: 49, color: "Lime" })
game.addTile({ tileId: "Keyboard", posX: 888, posY: 405, sizeX: 61, sizeY: 33, color: "Lime" })
game.addTile({ tileId: "Printer", posX: 895, posY: 450, sizeX: 52, sizeY: 46, color: "Lime" })

