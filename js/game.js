/* global Phaser */

// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Apr 2022
// This is the Phaser3 configuration file 

import SplashScene from './splashScene.js'

// Our game scene
const splashScene= new SplashScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
},
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
  
const game = new Phaser.Game(config)

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

// start title 
game.scene.start('splashScene')