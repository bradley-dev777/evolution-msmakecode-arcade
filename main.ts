controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column, playerSprite.tilemapLocation().row - 1))
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile5`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column - 1, playerSprite.tilemapLocation().row))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.splash("LEVEL FINISHED! NEXT LEVEL!")
    pauseUntil(() => !(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile16`)))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column + 1, playerSprite.tilemapLocation().row))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column, playerSprite.tilemapLocation().row + 1))
    }
})
let playerSprite: Sprite = null
tiles.setCurrentTilemap(tilemap`mazelv1`)
playerSprite = sprites.create(assets.image`dot player`, SpriteKind.Player)
scene.cameraFollowSprite(playerSprite)
tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
