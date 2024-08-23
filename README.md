# Forge

A batteries included fullstack meta framework built on React and Surreal, for the Edge (Cloudflare Workers / Workerd) or Bun.

Forge leverages SurrealDB as a web database, streamlining Auth, CRUD operations, ML Pipelines and API requests. By using Surreal's Events and Functions, you can interact with data in a type-safe manner, with Forge handling the GraphQL integration for seamless DX and zero cost abstraction.

## Features
- [x] Multisite: Create multisites in one codebase, for monorepos
- [ ] SaaS Templating: Create SaaS apps with ease
- [x] Built for React 18 & 19 with Suspense & RSC
- [x] State management with Proxy states & Signals
- [ ] CSS: Modules & Tailwind (v4) out of the box
- [ ] Markdown: MD and MDX out of the box
- [ ] File based routing: Advanced nested routing patterns with layouts and groups
- [ ] Surreal as backend: Optimised for GraphQL
- [ ] Rendering with CSR, SSR, SSG and ISR
- [x] Deployments for Cloudflare Pages and Bun
- [ ] Automatic ENV Variables


### State Management
You can use component level statement with React `useState`, and `Context` for global scope; Forge also ships its own state management system built on top of valtio offering maximum performance and flexibility.

```ts
// store.ts
import { createStore } from '@foretag/forge';

const store = createStore({
  count: 0
});

// App.tsx
import { useSignal } from '@foretag/forge';

import { store } from '@/lib/store';

const App = () => {
  const count = useSignal(store.count);

  return <div>
    Count: {$(state).count} ({Math.random()})
  </div>;
}
```
