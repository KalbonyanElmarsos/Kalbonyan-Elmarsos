# Section3 notes

## CSS (describing and presenting shtml styling)

### types of css?

- inline (inside the html tag as a property).
- internal (inside the html file in the head tag ) .
- external (outside the html in a separate file ) .

### css attributes

- pesudo-classes(tag:nth-child/first-child....)

* a:visited{...}==> visited links (pesudo class)
* a:active{...}==> clicked link
* selectors priority
  _ !important==>inline ==> id==>class&&pesudo classes==>tag name==>universal selector(_)
  - if multiple ==> last win(highest priority)

### best practicing

- a:link{....}.

* class instead if id selectors
* how to center element==>{width:value; margin:auto auto;}

### urgant notes

- margin collapsing if two or more occupy the same area.

* inline elements do not create vertical space (top/bottom) like a,span,button, li... //vedio39//.
* block elements occupy 100% parent width.
* img tag consider as inline-block not inline ==> this means that you can apply margin/padding/width/height and also it still inline(occupy the content and aligned besides each other) //vedio39-20:00//
* pesudo elements ==> h1::first-letter, h1::first-line, h1::before{content:''}, h1::after{content:''},,,,,, any pesudo-element is an inline element,
* adjusant sebling slector==> h1 + p

* [online html syntax validator](https://validator.w3.org/#validate_by_input)
* [diffchecker.com ](https://www.diffchecker.com/)
