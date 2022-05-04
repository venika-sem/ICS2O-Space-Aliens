/* global Phaser */

// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Apr 2022
// This is the Game Scene 

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default GameScene