/* global Phaser */

// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Apr 2022
// This is the Splash Scene 

class Splashscene extends Phaser.scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default SplashScene