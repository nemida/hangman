# React/Vite Project Instructions

## Project Context
- **Framework:** React 18+ with Vite
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Mobile-first)
- **State Management:** Zustand (avoid Redux unless necessary)
- **Routing:** React Router v6

## Coding Standards
1. **Functional Components:** Always use functional components with named exports.
2. **Hooks:** custom hooks should be stored in `/src/hooks` and prefixed with `use`.
3. **No Any:** Strictly avoid `any` type. Use interfaces or types for all props and state.
4. **Clean Code:** - Destructure props.
   - Use early returns to avoid nesting hell.
   - Keep components under 200 lines; split if larger.

## Behavior Rules
- **Context Awareness:** When I ask about a feature, check `@workspace` to see if existing components can be reused before creating new ones.
- **No Hallucinations:** If you don't see a file in the context, ask me to open it. Do not invent imports.

## Exclusion List (Mental)
- IGNORE `node_modules` completely.
- IGNORE `dist` and `build` folders.
- IGNORE `.test.tsx` files unless I am specifically asking for tests.