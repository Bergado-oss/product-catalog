# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1. What is the difference between props and state?
Props are values passed into a component from its parent; the component only reads them. State is data a component owns and manages itself, and it can change over time using a setter such as setCartCount. Changing state re-renders the component.

2. Why can a child component not modify the props it receives? 
Props are read-only so data flows in one direction and stays predictable. The parent owns the data, so if a child could change it, other components using the same value could break without anyone knowing why. If something needs to change, the parent must change it.

3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward? 
The parent passes a function down as a prop. The child doesn't change any parent data directly. It just calls that function and passes a value (the product title). The function runs in the parent, where it can update the parent's state with the value it received.

4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?
React uses key to tell which item is which between renders, so it can update, add, or remove only the items that changed. If keys are missing or duplicated, React may reuse the wrong component, causing wrong or stale data to show, mixed-up state, extra re-renders, and console warnings.

5. What does the children prop allow you to do that a normal prop does not? 
children lets a parent put any JSX between a component's opening and closing tags, such as <ProductCard> <span>New</span></ProductCard>. The card decides where to display it. A normal prop passes a single named value, while children allows flexible nested content, like badges, without defining a separate prop for each. 

