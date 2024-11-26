controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column, playerSprite.tilemapLocation().row - 1))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (BASCSHOOT) {
        if (0 < shtbar.value) {
            shtbar.value += -1
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
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile5`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column - 1, playerSprite.tilemapLocation().row))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.splash("Congratulations, ", plrname)
    game.splash("You have collected a gem!")
    game.splash("THE RED GEM: INCREASE SHOOT METER RECOVERY SPEED")
    XTRASHOOT = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Right, assets.tile`myTile22`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) || playerSprite.tileKindAt(TileDirection.Right, assets.tile`myTile11`)))) {
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
    tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
    // THE SHT IS NOT BAD WORD DO NOT QUESTION IT
    shtbar = statusbars.create(20, 4, StatusBarKind.Magic)
    shtbar.setLabel("SHOOT POWER")
    shtbar.attachToSprite(playerSprite, 0, 0)
    shtbar.value = shtbar.max
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 . . . . . . . . . . . 2 . 
        . 2 . 2 2 2 2 2 2 2 2 2 . 2 . 
        . 2 . 2 . . . . . . . 2 . 2 . 
        . 2 . 2 . 2 2 2 2 2 . 2 . 2 . 
        . 2 . 2 . 2 . . . 2 . 2 . 2 . 
        . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
        . 2 . 2 . 2 . . . 2 . 2 . 2 . 
        . 2 . 2 . 2 2 2 2 2 . 2 . 2 . 
        . 2 . 2 . . . . . . . 2 . 2 . 
        . 2 . 2 2 2 2 2 2 2 2 2 . 2 . 
        . 2 . . . . . . . . . . . 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column, playerSprite.tilemapLocation().row + 1))
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    tiles.setCurrentTilemap(tilemap`level9`)
})
let mySprite: Sprite = null
let projectile: Sprite = null
let shtbar: StatusBarSprite = null
let plrname = ""
let playerSprite: Sprite = null
let XTRASHOOT = false
let BASCSHOOT = false
BASCSHOOT = false
XTRASHOOT = false
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
game.onUpdateInterval(3000, function () {
    if (BASCSHOOT) {
        if (shtbar.value < 90) {
            if (XTRASHOOT) {
                shtbar.value += 5
            }
            shtbar.value += 5
        } else if (90 < shtbar.value && shtbar.value < 100) {
            shtbar.value = shtbar.max
        }
    }
})
