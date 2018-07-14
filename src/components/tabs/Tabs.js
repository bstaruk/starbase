class Tabs {
  constructor(props) {
    const { el } = props;

    if (!el) {
      return;
    }

    this.el = el;

    this.init();
  }

  init() {
    const menu = this.el;

    const menuItems = menu.querySelectorAll('.tabs__list > li > a');
    for (let i = 0; i < menuItems.length; i++) {
      const activeMenuItem = menuItems[i];
      activeMenuItem.addEventListener('click', (e) => {
        e.preventDefault();

        // handle menu item target
        const anchor = activeMenuItem.getAttribute('href');
        const anchorTarget = document.getElementById(anchor.replace('#', ''));

        // only proceed if menu item target is valid
        if (anchorTarget) {
          handleMenuItems(menuItems, activeMenuItem); // handle menu item active state
          handleMenuContent(menu, anchorTarget); // handle menu content active state
        }
      });
    }
  }
}

const handleMenuItems = (menuItems, activeMenuItem) => {
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    menuItem.classList.remove('tabs__list--active');
    menuItem.setAttribute('aria-selected', 'false');
  }

  // add new active class
  activeMenuItem.classList.add('tabs__list--active');
  activeMenuItem.setAttribute('aria-selected', 'true');
};

const handleMenuContent = (menu, anchorTarget) => {
  // remove any existing active classes
  const contentItems = menu.getElementsByClassName('tabs__content');
  for (let i = 0; i < contentItems.length; i++) {
    const contentItem = contentItems[i];
    contentItem.classList.remove('tabs__content--active');
    contentItem.setAttribute('aria-hidden', 'true');
  }

  // add new active class
  anchorTarget.classList.add('tabs__content--active');
  anchorTarget.setAttribute('aria-hidden', 'false');
};

export default Tabs;
