# menu
Navigation menu component styles (`.menu`) and javascript class (`Menu`).

Each menu should have a unique id, defined via the HTML `id` attribute on the menu wrapper.

Each menu content wrapper should have a `data-menu-id` attribute which corresponds with the menu id that it is associated with.

The reason for a menu id being required is so that multiple menus can exist on one page. This is how we avoid removing the active class from menu content wrappers that do not belong to the one being interacted with.

## example usage
```html
<nav id="primary">
  <ul>
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
  </ul>
</nav>
<section>
  <article id="tab1" data-menu-id="primary">
    Tab 1
  </article>
  <article id="tab2" data-menu-id="primary">
    Tab 2
  </article>
  <article id="tab3" data-menu-id="primary">
    Tab 3
  </article>
</section>
```
