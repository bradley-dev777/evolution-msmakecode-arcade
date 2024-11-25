controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile5`)))) {
        playerSprite.x += -1
    }
})
let playerSprite: Sprite = null
tiles.setCurrentTilemap(tilemap`mazelv1`)
playerSprite = sprites.create(assets.image`dot player`, SpriteKind.Player)
scene.cameraFollowSprite(playerSprite)
tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
