class Button {
  constructor(props) {
    if (props.el) {
      this.el = props.el;
      this.init();
    }
  }

  init() {
    for (let i = 0; i < this.el.length; i++) {
      this.el[i].addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('button--hit');
      });
    }
  }
}

module.exports = Button;
