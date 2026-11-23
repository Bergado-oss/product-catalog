# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Lab 4: Live Search and Filter (useState and useEffect)

Why two states, searchText and debouncedSearch? 
searchText must update on every keystroke so the input stays responsive and controlled. debouncedSearch only updates after the user pauses for 300 ms, so the filtering runs once per pause instead of on every key.

What if the debounce effect had no cleanup function? Every keystroke would leave its own timer running. Each timer would eventually fire and set debouncedSearch, so the list would update many times (with stale values) instead of once after the final pause. The debounce would not work.
Purpose of the dependency array? It tells React when to re-run the effect: only when a listed value has changed since the last render. With [], the effect runs once, after the first render only. If the array is left out completely, the effect runs after every render, which can cause wasted work or infinite loops if the effect sets state.

Why not sort the original products array directly? sort() mutates the array in place. Mutating shared data can cause bugs, would permanently change the "Default" order, and breaks React's rule of treating data as immutable. Copying first ([...filteredProducts]) keeps the original intact.
Store the filtered list in state, or calculate it during render? Calculate it during render. The filtered list is fully determined by debouncedSearch, category, sortOrder, and products, so storing it would duplicate data and risk it getting out of sync. Deriving it keeps a single source of truth and needs no extra effects.
