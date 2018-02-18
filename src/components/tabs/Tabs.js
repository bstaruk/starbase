class Tabs {
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

    const menuItems = menu.querySelectorAll('.tabs__list > li > a');
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
          handleMenuContent(menu, anchorTarget); // handle menu content active state
        }
      });
    }
  }
}

const handleMenuItems = (menu, menuItem) => {
  // remove any existing active classes
  const activeMenuItems = menu.getElementsByClassName('tabs__list--active');
  for (let i = activeMenuItems.length; i--;) {
    activeMenuItems[i].classList.remove('tabs__list--active');
  }

  // add new active class
  menuItem.classList.add('tabs__list--active');
};

const handleMenuContent = (menu, anchorTarget) => {
  // remove any existing active classes
  const activeContent = menu.getElementsByClassName('tabs__content--active');
  for (let i = activeContent.length; i--;) {
    activeContent[i].classList.remove('tabs__content--active');
  }

  // add new active class
  anchorTarget.classList.add('tabs__content--active');
};

export default Tabs;
