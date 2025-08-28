1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById → selects one element by its unique ID.

getElementsByClassName → selects all elements with a given class 

querySelector → selects the first element that matches any CSS selector.

querySelectorAll → selects all elements that match any CSS selector


2.How do you create and insert a new element into the DOM?
Ans:Create a new element.

Fill it with text or content.

Insert it into a parent element in the DOM.

3.What is Event Bubbling and how does it work?
Ans:Event Bubbling is a way events travel through the DOM.

When an event happens on an element, it first triggers on that element and then bubbles up to its parent, then the parent’s parent, and so on, all the way to the document root

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements.

Then, inside the listener, you check which child element triggered the event using event.target.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault()

Purpose: Stops the browser’s default behavior for an event.

Example: Clicking a link normally navigates to a new page. Using preventDefault() prevents the navigation.

Key point: The event still bubbles; it just doesn’t do its default action.

2. stopPropagation()

Purpose: Stops the event from bubbling up the DOM tree.

Example: Clicking a button inside a div won’t trigger the div’s click listener if stopPropagation() is used.

Key point: It does not stop the default behavior; it only stops the event from reaching other elements.
