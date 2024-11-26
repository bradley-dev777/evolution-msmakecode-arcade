def on_up_pressed():
    if not (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile
    """)) or (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile2
    """)) or playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile3
    """)))):
        tiles.place_on_tile(playerSprite,
            tiles.get_tile_location(playerSprite.tilemap_location().column,
                playerSprite.tilemap_location().row - 1))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite, location):
    tiles.set_current_tilemap(tilemap("""
        level0
    """))
    tiles.place_on_random_tile(playerSprite, assets.tile("""
        myTile10
    """))
    game.splash("Keep going!")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    global XTRASHOOT, mySprite2
    game.splash("Congratulations, ", plrname)
    game.splash("You have collected a gem!")
    game.splash("THE RED GEM: INCREASE SHOOT METER RECOVERY SPEED")
    XTRASHOOT = True
    playerSprite.set_image(assets.image("""
        dot player STAGE 3
    """))
    tiles.set_current_tilemap(tilemap("""
        level14
    """))
    tiles.place_on_random_tile(playerSprite, assets.tile("""
        myTile10
    """))
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    tiles.place_on_random_tile(mySprite2, assets.tile("""
        myTile4
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile18
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    global BASCSHOOT, shtbar, mySprite
    game.splash("Congratulations, ", plrname)
    game.splash("You have collected a gem!")
    game.splash("Gems give you super powers!")
    game.splash("THE BLUE GEM: ABILITY TO SHOOT OUT BASIC PROJECTILES WITH A BUTTON")
    BASCSHOOT = True
    game.splash("Now, enemies will spawn. Good luck! (if red squares looked wierd, it might be an enemy!)")
    tiles.set_current_tilemap(tilemap("""
        level12
    """))
    tiles.place_on_random_tile(playerSprite, assets.tile("""
        myTile10
    """))
    # THE SHT IS NOT BAD WORD DO NOT QUESTION IT
    shtbar = statusbars.create(20, 4, StatusBarKind.magic)
    shtbar.set_label("SHOOT POWER")
    shtbar.attach_to_sprite(playerSprite, 0, 0)
    shtbar.value = shtbar.max
    mySprite = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile4
    """))
    playerSprite.set_image(assets.image("""
        dot player STAGE 2
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile17
    """),
    on_overlap_tile3)

def on_left_pressed():
    if not (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile
    """)) or (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile0
    """)) or playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile5
    """)))):
        tiles.place_on_tile(playerSprite,
            tiles.get_tile_location(playerSprite.tilemap_location().column - 1,
                playerSprite.tilemap_location().row))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    if not (playerSprite.tile_kind_at(TileDirection.RIGHT, assets.tile("""
        myTile22
    """)) or (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile1
    """)) or (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile2
    """)) or playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile7
    """))) or playerSprite.tile_kind_at(TileDirection.RIGHT, assets.tile("""
        myTile11
    """)))):
        tiles.place_on_tile(playerSprite,
            tiles.get_tile_location(playerSprite.tilemap_location().column + 1,
                playerSprite.tilemap_location().row))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile4(sprite4, location4):
    global XTRASHOOT, GREENFIRE_BOSS, GF_HEALTH, statusbar
    game.splash("Congratulations, ", plrname)
    game.splash("You have collected a gem!")
    game.splash("THE TURQUOISE GEM: UNLOCK BOSS LEVEL")
    game.splash("Up front is Greenfire , the evil snake. Good luck!")
    XTRASHOOT = True
    playerSprite.set_image(assets.image("""
        myImage
    """))
    tiles.set_current_tilemap(tilemap("""
        level16
    """))
    tiles.place_on_random_tile(playerSprite, assets.tile("""
        myTile10
    """))
    GREENFIRE_BOSS = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    tiles.place_on_random_tile(GREENFIRE_BOSS, assets.tile("""
        myTile4
    """))
    GF_HEALTH = statusbars.create(20, 4, StatusBarKind.enemy_health)
    GF_HEALTH.attach_to_sprite(GREENFIRE_BOSS)
    statusbar = statusbars.create(20, 4, StatusBarKind.health)
    statusbar.attach_to_sprite(playerSprite)
    GREENFIRE_BOSS.follow(playerSprite, 25)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile19
    """),
    on_overlap_tile4)

def on_a_pressed():
    global projectile
    if BASCSHOOT:
        if 0 < shtbar.value:
            shtbar.value += -1
            if controller.right.is_pressed():
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    playerSprite,
                    50,
                    0)
            elif controller.left.is_pressed():
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    playerSprite,
                    -50,
                    0)
            elif controller.up.is_pressed():
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    playerSprite,
                    0,
                    -50)
            elif controller.down.is_pressed():
                projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    playerSprite,
                    0,
                    50)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_down_pressed():
    if not (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile1
    """)) or (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile0
    """)) or playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile6
    """)))):
        tiles.place_on_tile(playerSprite,
            tiles.get_tile_location(playerSprite.tilemap_location().column,
                playerSprite.tilemap_location().row + 1))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite5, otherSprite):
    if otherSprite == mySprite:
        tiles.set_current_tilemap(tilemap("""
            level9
        """))
        sprites.destroy(otherSprite, effects.fire, 500)
    elif otherSprite == mySprite2:
        tiles.set_current_tilemap(tilemap("""
            level15
        """))
        sprites.destroy(otherSprite, effects.fire, 500)
    elif otherSprite == GREENFIRE_BOSS:
        GF_HEALTH.value += -25
        if GF_HEALTH.value == 0:
            game.set_game_over_effect(True, effects.star_field)
            game.set_game_over_message(True,
                "YOU WON!!! TIME:" + str(game.runtime() / 1000) + "SECONDS")
            game.game_over(True)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

projectile: Sprite = None
statusbar: StatusBarSprite = None
GF_HEALTH: StatusBarSprite = None
GREENFIRE_BOSS: Sprite = None
mySprite: Sprite = None
shtbar: StatusBarSprite = None
mySprite2: Sprite = None
plrname = ""
playerSprite: Sprite = None
XTRASHOOT = False
BASCSHOOT = False
game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
BASCSHOOT = False
XTRASHOOT = False
carnival.add_label_to("Reach the end", carnival.Areas.BOTTOM, 15)
tiles.set_current_tilemap(tilemap("""
    mazelv1
"""))
playerSprite = sprites.create(assets.image("""
        dot player ORIGINAL
    """),
    SpriteKind.player)
scene.camera_follow_sprite(playerSprite)
tiles.place_on_random_tile(playerSprite, assets.tile("""
    myTile10
"""))
plrname = game.ask_for_string("What is your name?")
game.splash("Hello, ", plrname)
game.splash("The kingdom had been attacked by the evil snake, Greenfire")
game.splash("All the gems that gave us powers are lost.")
game.splash("Please, help us collect the gems and defeat the dragon.")

def on_update_interval():
    if BASCSHOOT:
        if shtbar.value < 90:
            if XTRASHOOT:
                shtbar.value += 5
            shtbar.value += 5
        elif 90 < shtbar.value and shtbar.value < 100:
            shtbar.value = shtbar.max
game.on_update_interval(3000, on_update_interval)
