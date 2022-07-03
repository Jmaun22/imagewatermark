const sharp = require('sharp')

const compositeImage = () => {
  sharp ('./images/fall.jpg')
  .composite([{input: './images/robo.jpg', left: 900, top: 750}])
  .toFile(__dirname + '/processed_images/composite_robo.jpg')
}

compositeImage()