# menu
Navigation menu component styles (`.menu`) and javascript class (`Menu`).

## example usage
```html
<section class="tabs">
  <nav>
    <ul class="tabs__list">
      <li><a href="#tab1" class="tabs__list--active">This is Tab #1</a></li>
      <li><a href="#tab2">This is Tab #2</a></li>
      <li><a href="#tab3">This is Tab #3</a></li>
    </ul>
  </nav>
  <article id="tab1" class="tabs__content tabs__content--active">
    <p>This is Tab 1</p>
  </article>
  <article id="tab2" class="tabs__content">
    <p>This is Tab 2</p>
  </article>
  <article id="tab3" class="tabs__content">
    <p>This is Tab 3</p>
  </article>
</section>

```