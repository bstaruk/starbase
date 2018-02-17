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
          handleMenuItems(menu, menuItem); // handle menu item active state
          handleMenuContent(menu.id, anchorTarget); // handle menu content active state
        }
      });
    }
  }
}

const handleMenuItems = (menu, menuItem) => {
  // remove any existing active classes
  const activeMenuItems = menu.getElementsByClassName('menu__list--active');
  for (let i = activeMenuItems.length; i--;) {
    activeMenuItems[i].classList.remove('menu__list--active');
  }

  // add new active class
  menuItem.classList.add('menu__list--active');
};

const handleMenuContent = (menuId, anchorTarget) => {
  // remove any existing active classes
  const activeContent = document.querySelectorAll(`.menu__content--active[data-menu-id="${menuId}"]`);
  for (let i = activeContent.length; i--;) {
    activeContent[i].classList.remove('menu__content--active');
  }

  // add new active class
  anchorTarget.classList.add('menu__content--active');
};

export default Menu;
