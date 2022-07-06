# Section Notes

## useEffect hook used to manage any side effects related to the component.

## how useEffect works?

- 1. runs after every rerendering and after the first rendering --> useEffect(()=>{})
- 2. with empty dependency it runs only after the first rendering --> useEffect(()=>{},[])
- 3. with dependency runs only if one of them changed -->useEffect(()=>{},[something ])

## useReducer like useState but it used with complex states.

## when to user useReducer--> when a state update depends on another state.

## contextApI--> a state management built-in reactjs.

## ways to consume the context?

- 1. by using consumer component
- 2. by using useContext hook

## React contextAPI not a ood solution fro state management in the high frequency changes apps

## react hooks rules?

- 1. used only inside a component.
- 2. call them in the **top level** of component.
  - not in nested func.
  - not in any block statement.

### 🐳🐳[section-project](https://react-course-section10.netlify.app/)
