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

    const menuListItems = self.querySelectorAll('.menu__list > li > a');
    for (let i = 0; i < menuListItems.length; i++) {
      const menuListItem = menuListItems[i];
      menuListItem.addEventListener('click', (e) => {
        e.preventDefault();

        // handle menu list item target
        const anchor = menuListItem.getAttribute('href');
        const anchorTarget = document.getElementById(anchor.replace('#', ''));
        if (anchorTarget) {
          // handle menu list item active state
          resetMenuItems(self);
          menuListItem.classList.add('menu__list--active');

          // handle menu content active state
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
