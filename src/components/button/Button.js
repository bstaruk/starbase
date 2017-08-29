class Button {
  constructor(props) {
    if (props.el) {
      this.el = props.el;
      this.el && this.init();
    }
  }

  init() {
    let hitCounter = 0;
    this.el.addEventListener('click', function (e) {
      e.preventDefault();
      hitCounter++;
      this.title = `you hit me ${hitCounter} times`;
      this.classList.toggle('button__hit');
    });
  }
}

module.exports = Button;
