controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column, playerSprite.tilemapLocation().row - 1))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (BASCSHOOT) {
        if (controller.right.isPressed()) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, 50, 0)
        } else if (controller.left.isPressed()) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, -50, 0)
        } else if (controller.up.isPressed()) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, 0, -50)
        } else if (controller.down.isPressed()) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . 9 9 9 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, 0, 50)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile5`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column - 1, playerSprite.tilemapLocation().row))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column + 1, playerSprite.tilemapLocation().row))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    game.splash("Congratulations, ", plrname)
    game.splash("You have collected a gem!")
    game.splash("Gems give you super powers!")
    game.splash("THE BLUE GEM: ABILITY TO SHOOT OUT BASIC PROJECTILES WITH A BUTTON")
    BASCSHOOT = true
    game.splash("Now, enemies will spawn. Good luck! ")
    tiles.setCurrentTilemap(tilemap`level9`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column, playerSprite.tilemapLocation().row + 1))
    }
})
let projectile: Sprite = null
let plrname = ""
let playerSprite: Sprite = null
let BASCSHOOT = false
BASCSHOOT = false
carnival.addLabelTo("Reach the end", carnival.Areas.Bottom, 15)
tiles.setCurrentTilemap(tilemap`mazelv1`)
playerSprite = sprites.create(assets.image`dot player`, SpriteKind.Player)
scene.cameraFollowSprite(playerSprite)
tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
plrname = game.askForString("What is your name?")
game.splash("Hello, ", plrname)
game.splash("The kingdom had been attacked by the dragon, Greenfire")
game.splash("All the gems that gave us powers are lost.")
game.splash("Please, help us collect the gems and defeat the dragon.")
