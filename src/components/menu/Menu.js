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
    const menu = this.el;

    const menuItems = menu.querySelectorAll('.menu__list > li > a');
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      menuItem.addEventListener('click', (e) => {
        e.preventDefault();

        // handle menu item target
        const anchor = menuItem.getAttribute('href');
        const anchorTarget = document.getElementById(anchor.replace('#', ''));

        // only proceed if menu item target is valid
        if (anchorTarget) {
          // handle menu item active state
          resetMenuItems(menu);
          menuItem.classList.add('menu__list--active');

          // handle menu content active state
          resetContent(menu.id);
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
