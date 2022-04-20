/* global Phaser */

// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Apr 2022
// This is the Phaser3 configuration file 

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
console.log(game)