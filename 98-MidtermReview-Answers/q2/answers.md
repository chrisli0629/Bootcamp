What do the following CSS selectors select?  For bonus points, please provide an example via a Plunker, jsbin or CodePen (come back to this after you have attempted other questions).

    div + p
    div p
    div, p
    div > p
    div ~ p

### Solution here please ...

    div + p selects <p>’s immediately after any <div>’s
    div p. Selects all <p>’s inside <div> elements
    div, p. Selects all <div> and <p> elements.
    div > p Selects all <p> elements where the parent is a <div> element
    div ~ p Selects every <p> element that are preceded by a <div> element
