The Far-Away is a packing list app that give a list of things that the user needs to pack for the trip.

FUNCTIONALITY

1. User can fill in a form for the number of days of the trip which then returns the items that needs to be packed.
2.

COMPONENT BREAKDOWN

1. Logo
2. Form
3. Packing list
4. Stats

# Concepts Used

1. Controlled elements -> used to handle the inputs given in the form element.

- [Element that is defined based on some state value.]

- why? forms inputs and select elements are stored in states in the html DOM. this makes it difficult for react to fetch the value from DOM States. Also to maintain uniformity in data storage, its better to stored the input and select data in React states which can be easily accessed by React application rather than DOM State in the HTML.
- # steps to impliment.
  1. create state using useState() react hook.i.e [define state variable]
  2. set the value property of input tag as the state variable defined. [use state variable somewhere]
  3. listen to the changes on the input field using onChange event listener and use the setter function of the state to update the state variable.[ update state variable]

onClick takes in an argument of an actual function, not a function call

- function call means 'function()'

2. Lifting up of State.

- incase the state data needs to be shared by 2 different sibling components, then the state is initialised in the parent component containing both the states.
- both the state variable and setState function in passed as props into the child component where the state has to be modified.
  - when setState is passed as prop and the child component updates the state, the data flow is upwards i.e from child to parent. This is called child-parent communication.
