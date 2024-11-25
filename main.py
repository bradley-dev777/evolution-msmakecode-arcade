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

def on_overlap_tile(sprite, location):
    game.splash("LEVEL FINISHED! NEXT LEVEL!")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile16
    """),
    on_overlap_tile)

def on_right_pressed():
    if not (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile1
    """)) or (playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile2
    """)) or playerSprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile7
    """)))):
        tiles.place_on_tile(playerSprite,
            tiles.get_tile_location(playerSprite.tilemap_location().column + 1,
                playerSprite.tilemap_location().row))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

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

playerSprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    mazelv1
"""))
playerSprite = sprites.create(assets.image("""
    dot player
"""), SpriteKind.player)
scene.camera_follow_sprite(playerSprite)
tiles.place_on_random_tile(playerSprite, assets.tile("""
    myTile10
"""))