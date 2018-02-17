class Menu {
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

    const menuItems = self.querySelectorAll('.menu__list > li > a');
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      menuItem.addEventListener('click', (e) => {
        e.preventDefault();

        // handle menu item active state
        resetMenuItems(self);
        menuItem.classList.add('menu__list--active');

        const anchor = menuItem.getAttribute('href');
        const anchorTarget = document.getElementById(anchor.replace('#', ''));
        if (anchorTarget) {
          resetContent(self.id);
          anchorTarget.classList.add('menu__content--active');
        }
      });
    }
  }
}

const resetMenuItems = (menu) => {
  const activeMenuItems = menu.getElementsByClassName('menu__list--active');
  for (let i = activeMenuItems.length; i--;) {
    activeMenuItems[i].classList.remove('menu__list--active');
  }
};

const resetContent = (menuId) => {
  const activeContent = document.querySelectorAll(`.menu__content--active[data-menu-id="${menuId}"]`);
  for (let i = activeContent.length; i--;) {
    activeContent[i].classList.remove('menu__content--active');
  }
};

export default Menu;
