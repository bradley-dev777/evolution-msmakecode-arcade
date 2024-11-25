def on_left_pressed():
    playerSprite.x += -1
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

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