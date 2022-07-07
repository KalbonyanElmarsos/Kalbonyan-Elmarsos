# Section4 notes

### CSS layouts?

- float ==> the old way(outdated).
- flexbox ==> modern way but used on 1-dimensional row and simple components.
- Grid ==> also a modern way but used with complex components and 2-dimensional grid.

### urgant notes:

- how to clear float with pesudo element:
  - .class::after{content:'';clear:both/left/right; display:block}
  - using a clear div at the end.

* pesudo element by default is inline and to apply the float clear you have to use block.
* box-sizing:borer-box==> to consider any padding/margin as a part from the element width/height.
* flex layout properties:

  - applied to the container(flex):
    - justify-content.
    * align-items.
    * gap.
    * flex-direction.
    * align-content.
    * flex-wrap.

  * applied to the container(flex) items:
    - align-self.
    - order .
    * flex-grow.
    * flex-shrink.
    * flex-basis (item width).
    * flex: flex-basis flex-grow flex-shrink.

* grid layout properties:
  - applied to the container(flex):
    - grid-template-columns.
    - grid-template-rows.
    - grid-gap/gap(columns/rows).
    - column-gap.
    - row-gap.
    * justify-content.
    * align-content.
  * applied to the container(grid) items:
    - grid-column.
    - grid-row.
    - justify-self.
    - align-self.
* flex-box used to create 1-dimensional layout, and grid used to create 2-dimensional layout.
