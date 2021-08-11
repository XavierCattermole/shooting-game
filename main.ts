namespace SpriteKind {
    export const npc = SpriteKind.create()
}
function level (lvlnum: number) {
    if (Stage == 1) {
        tiles.setTilemap(tilemap`level3`)
    } else if (Stage == 2) {
        tiles.setTilemap(tilemap`level1`)
        mySprite.say("I feel like I've been here before!", 5000)
    } else if (Stage == 3) {
        tiles.setTilemap(tilemap`level3`)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.npc)
        controller.moveSprite(mySprite)
    } else if (Stage == 4) {
        tiles.setTilemap(tilemap`level8`)
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
    } else if (Stage == 5) {
    	
    } else {
    	
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
    scene.cameraShake(4, 500)
}
scene.onOverlapTile(SpriteKind.npc, sprites.dungeon.chestClosed, function (sprite, location) {
    pause(100)
    tiles.setTileAt(tiles.getTileLocation(6, 2), sprites.dungeon.hazardHole)
    tiles.setTileAt(tiles.getTileLocation(8, 9), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(8, 9), false)
    music.baDing.playUntilDone()
})
scene.onOverlapTile(SpriteKind.npc, sprites.dungeon.doorOpenEast, function (sprite, location) {
    mySprite2 = 0
    level(Stage)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    Stage += 1
    level(Stage)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    pause(100)
    tiles.setTileAt(tiles.getTileLocation(8, 9), sprites.dungeon.doorOpenEast)
    tiles.setTileAt(tiles.getTileLocation(6, 2), sprites.dungeon.chestOpen)
    tiles.setWallAt(tiles.getTileLocation(8, 9), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    Stage += 1
    level(Stage)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    pause(100)
    tiles.setTileAt(tiles.getTileLocation(15, 13), sprites.dungeon.doorOpenEast)
    tiles.setWallAt(tiles.getTileLocation(15, 13), false)
    tiles.setTileAt(tiles.getTileLocation(7, 8), sprites.dungeon.buttonTealDepressed)
    music.baDing.playUntilDone()
})
let mySprite2 = 0
let mySprite: Sprite = null
let Stage = 0
Stage = 0
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
