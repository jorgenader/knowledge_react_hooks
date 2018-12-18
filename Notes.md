# Notes

## Intro

- Nothing special here, just your normal "Hi I'm Jorgen and today I will talk about Hooks"

## Problems with React today

- Currently there are few ways to share logic between components
    - Notable patterns are Higher-order component and Render Props
    - Each requires special structure to make use of those
    - DevTool wrapper hell

- Huge components
    - Logic is split between multiple life-cycle methods
    - Easy to introduce bugs and inconsistencies
    
- Classes are hard to understand for both humans and machines
    - Remember to bind in constructor or create arrow functions
        - Extra overhead
    - Top-down data flow can only be followed in `render`
    - Code does not always stay on optimizable path
    - Classes don't minify very well


## Hooks

- Better primitives
    - Functional components can now also use React's features
    - Stateful logic becomes more shareable
    - No changes to component hierarchy

- Component code is easier to follow
    - Data flows from top
    
- Rules !!!

## Show us some code

- Code example time


## References & Thanks
