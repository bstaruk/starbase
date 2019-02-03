const Tabs = (el) => {
  // do nothing if base element not provided
  if (!el) return;

  // required elements
  const ui = {
    el
  };

  const handleMenuItems = (menuItems, activeMenuItem) => {
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      menuItem.classList.remove('tabs__anchor--active');
      menuItem.setAttribute('aria-selected', 'false');
    }

    // add new active class
    activeMenuItem.classList.add('tabs__anchor--active');
    activeMenuItem.setAttribute('aria-selected', 'true');
  };

  const handleMenuContent = (anchorTarget) => {
    // remove any existing active classes
    const contentItems = ui.el.getElementsByClassName('tabs__content');
    for (let i = 0; i < contentItems.length; i++) {
      const contentItem = contentItems[i];
      contentItem.classList.remove('tabs__content--active');
      contentItem.setAttribute('aria-hidden', 'true');
    }

    // add new active class
    anchorTarget.classList.add('tabs__content--active');
    anchorTarget.setAttribute('aria-hidden', 'false');
  };

  const init = () => {
    const menuItems = ui.el.querySelectorAll('.tabs__list > li > a');
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
          handleMenuContent(anchorTarget); // handle menu content active state
        }
      });
    }
  };

  init();
};


export default Tabs;
