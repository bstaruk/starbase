# menu
Navigation tabs component styles (`.tabs`) and javascript class (`Tabs`).

## example usage
```html
<main role="main" class="tabs">
  <nav>
    <ul role="tablist" class="tabs__list">
      <li role="tab" id="tab1" aria-controls="panel1" aria-selected="true"><a href="#panel1" title="click to activate panel one" class="tabs__list--active">tab one</a></li>
      <li role="tab" id="tab2" aria-controls="panel2" aria-selected="false"><a href="#panel2" title="click to activate panel two">tab two</a></li>
      <li role="tab" id="tab3" aria-controls="panel3" aria-selected="false"><a href="#panel3" title="click to activate panel three">tab three</a></li>
    </ul>
  </nav>
  <div role="tabpanel" aria-labelledby="tab1" id="panel1" class="tabs__content tabs__content--active" aria-hidden="false">
    <p>panel one</p>
  </div>
  <div role="tabpanel" aria-labelledby="tab2" id="panel2" class="tabs__content" aria-hidden="true">
    <p>panel two</p>
  </div>
  <div role="tabpanel" aria-labelledby="tab3" id="panel3" class="tabs__content" aria-hidden="true">
    <p>panel three</p>
  </div>
</main>
```
