scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    game.splash("Congratulations, ", plrname)
    game.splash("You have collected a gem!")
    game.splash("THE TURQUOISE GEM: UNLOCK BOSS LEVEL")
    game.splash("Up front is Greenfire , the evil snake. Good luck!")
    XTRASHOOT = true
    mySprite.setImage(assets.image`myImage`)
    tiles.setCurrentTilemap(tilemap`level16`)
    tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
    GREENFIRE_BOSS = sprites.create(img`
        5 5 5 5 5 c c c c c c c 5 5 5 5 
        5 5 5 5 c 6 7 7 7 7 7 6 c 5 5 5 
        5 5 5 c 7 c 6 6 6 6 c 7 6 c 5 5 
        5 5 c 6 7 6 f 6 6 f 6 7 7 c 5 5 
        5 5 c 7 7 7 7 7 7 7 7 7 7 c 5 5 
        5 5 4 4 4 1 f f 1 6 7 7 7 f 5 5 
        5 4 4 5 5 1 f f 1 f 7 7 7 f 5 5 
        4 5 5 4 4 2 2 2 2 f 7 7 6 f 5 5 
        5 4 4 5 5 2 2 2 2 7 7 6 f c 5 5 
        5 c 4 4 4 7 7 7 7 7 c c 7 7 c 5 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c 5 5 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c 5 5 
        5 f 6 1 1 1 1 1 6 6 6 6 c 5 5 5 
        5 5 f f c c c c c c c c 5 5 5 5 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(GREENFIRE_BOSS, assets.tile`myTile4`)
    GF_HEALTH = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    GF_HEALTH.attachToSprite(GREENFIRE_BOSS)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(playerSprite)
    GREENFIRE_BOSS.follow(playerSprite, 50)
})
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
    mySprite.setImage(assets.image`dot player STAGE 3`)
    tiles.setCurrentTilemap(tilemap`level14`)
    tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
    mySprite2 = sprites.create(img`
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
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
    game.splash("Keep going!")
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
    tiles.setCurrentTilemap(tilemap`level12`)
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
    playerSprite.setImage(assets.image`dot player STAGE 2`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`) || (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`) || playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)))) {
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(playerSprite.tilemapLocation().column, playerSprite.tilemapLocation().row + 1))
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (otherSprite == mySprite) {
        tiles.setCurrentTilemap(tilemap`level9`)
        sprites.destroy(otherSprite, effects.fire, 500)
    } else if (otherSprite == mySprite2) {
        tiles.setCurrentTilemap(tilemap`level15`)
        sprites.destroy(otherSprite, effects.fire, 500)
    } else if (otherSprite == GREENFIRE_BOSS) {
        GF_HEALTH.value += -25
        if (GF_HEALTH.value == 0) {
            game.setGameOverEffect(true, effects.starField)
            game.setGameOverMessage(true, "YOU WON!!! TIME:" + game.runtime() + "MS")
            game.gameOver(true)
        }
    }
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let shtbar: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let GF_HEALTH: StatusBarSprite = null
let GREENFIRE_BOSS: Sprite = null
let mySprite: Sprite = null
let plrname = ""
let playerSprite: Sprite = null
let XTRASHOOT = false
let BASCSHOOT = false
BASCSHOOT = false
XTRASHOOT = false
carnival.addLabelTo("Reach the end", carnival.Areas.Bottom, 15)
tiles.setCurrentTilemap(tilemap`mazelv1`)
playerSprite = sprites.create(assets.image`dot player ORIGINAL`, SpriteKind.Player)
scene.cameraFollowSprite(playerSprite)
tiles.placeOnRandomTile(playerSprite, assets.tile`myTile10`)
plrname = game.askForString("What is your name?")
game.splash("Hello, ", plrname)
game.splash("The kingdom had been attacked by the evil snake, Greenfire")
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
