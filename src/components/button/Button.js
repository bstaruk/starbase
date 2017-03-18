require('./button.css');

class Button {
  constructor() {
    this.init();
  }

  init() {
    const buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log('button hit');
      });
    }
  }
}

module.exports = Button;
