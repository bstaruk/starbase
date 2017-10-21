class Button {
  constructor(props) {
    if (props.el) {
      this.el = props.el;
      if (this.el) {
        this.init();
      }
    }
  }

  init() {
    const self = this.el;
    let hitCounter = 0;
    self.addEventListener('click', (e) => {
      e.preventDefault();
      hitCounter++;
      self.title = `you hit me ${hitCounter} times!`;
      self.classList.toggle('button__hit');
    });
  }
}

export default Button;
